// ** React Imports
import { ReactNode, useState } from "react";

// ** Next Import
import { useRouter, usePathname } from "next/navigation";

// ** Types
import type { ACLObj, AppAbility } from "../../../configs/acl";

// ** Context Imports
import { AbilityContext } from "../../../layouts/components/acl/Can";

// ** Config Import
import { buildAbilityFor } from "../../../configs/acl";

// ** Component Import
import NotAuthorized from "../../../401";
import BlankLayout from "../../layouts/BlankLayout";

// ** Hooks
import { useAuth } from "../../../hooks/useAuth";

interface AclGuardProps {
  children: ReactNode;
  guestGuard: boolean;
  aclAbilities: ACLObj;
}

const AclGuard = (props: AclGuardProps) => {
  // ** Props
  const { aclAbilities, children, guestGuard } = props;

  const [ability, setAbility] = useState<AppAbility | undefined>(undefined);

  // ** Hooks
  const auth = useAuth();
  const router = useRouter();
  const pathName = usePathname();

  // If guestGuard is true and user is not logged in or its an error page, render the page without checking access
  if (
    guestGuard ||
    pathName === "/404" ||
    pathName === "/500" ||
    pathName === "/"
  ) {
    return <>{children}</>;
  }

  // User is logged in, build ability for the user based on his role
  if (auth.user && auth.user.role && !ability) {
    setAbility(buildAbilityFor(auth.user.role, aclAbilities.subject));
  }

  // Check the access of current user and render pages
  if (ability && ability.can(aclAbilities.action, aclAbilities.subject)) {
    return (
      <AbilityContext.Provider value={ability}>
        {children}
      </AbilityContext.Provider>
    );
  }

  // Render Not Authorized component if the current user has limited access
  return (
    <BlankLayout>
      <NotAuthorized />
    </BlankLayout>
  );
};

export default AclGuard;
