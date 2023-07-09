"use client";
import {
  JSXElementConstructor,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";
import type { Metadata } from "next";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { Inter } from "next/font/google";
import "../core/@fake-db";

import { createEmotionCache } from "../core/utils/create-emotion-cache";
import { AuthProvider } from "../context/AuthContext";
import {
  SettingsConsumer,
  SettingsProvider,
} from "../core/context/settingsContext";
import ThemeComponent from "../core/theme/ThemeComponent";
import WindowWrapper from "../core/components/window-wrapper";
import AclGuard from "../core/components/auth/AclGuard";
import AuthGuard from "../core/components/auth/AuthGuard";
import GuestGuard from "../core/components/auth/GuestGuard";
import Spinner from "../core/components/spinner";
import { defaultACLObj } from "../configs/acl";
import UserLayout from "../layouts/UserLayout";
import ReactHotToast from "../core/styles/libs/react-hot-toast";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

const clientSideEmotionCache = createEmotionCache();

type GuardProps = {
  authGuard: boolean;
  guestGuard: boolean;
  children: ReactNode;
};

const Guard = ({ children, authGuard, guestGuard }: GuardProps) => {
  if (guestGuard) {
    return <GuestGuard fallback={<Spinner />}>{children}</GuestGuard>;
  } else if (!guestGuard && !authGuard) {
    return <>{children}</>;
  } else {
    return <AuthGuard fallback={<Spinner />}>{children}</AuthGuard>;
  }
};

export default function RootLayout(props: {
  Component: any;
  emotionCache?: EmotionCache | undefined;
  pageProps: any;
  children: React.ReactNode;
}) {
  const { children, emotionCache = clientSideEmotionCache } = props;
  const contentHeightFixed = false;
  const getLayout = (
    page:
      | string
      | number
      | boolean
      | ReactElement<any, string | JSXElementConstructor<any>>
      | Iterable<ReactNode>
      | ReactPortal
      | PromiseLikeOfReactNode
      | null
      | undefined
  ) => <UserLayout contentHeightFixed={contentHeightFixed}>{page}</UserLayout>;
  const setConfig = undefined;
  const authGuard = true;
  const guestGuard = false;
  const aclAbilities = defaultACLObj;

  return (
    <html lang="en">
      <body>
        <CacheProvider value={emotionCache}>
          {/* <Head>
            <title>{`${themeConfig.templateName} - Material Design React Admin Template`}</title>
            <meta
              name="description"
              content={`${themeConfig.templateName} – Material Design React Admin Dashboard Template – is the most developer friendly & highly customizable Admin Dashboard Template based on MUI v5.`}
            />
            <meta
              name="keywords"
              content="Material Design, MUI, Admin Template, React Admin Template"
            />
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
          </Head> */}

          <AuthProvider>
            <SettingsProvider {...{ pageSettings: setConfig }}>
              <SettingsConsumer>
                {({ settings }) => {
                  return (
                    <ThemeComponent settings={settings}>
                      <WindowWrapper>
                        <Guard authGuard={authGuard} guestGuard={guestGuard}>
                          <AclGuard
                            aclAbilities={aclAbilities}
                            guestGuard={guestGuard}
                          >
                            {getLayout(children)}
                          </AclGuard>
                        </Guard>
                      </WindowWrapper>
                      <ReactHotToast>
                        <Toaster
                          position={settings.toastPosition}
                          toastOptions={{ className: "react-hot-toast" }}
                        />
                      </ReactHotToast>
                    </ThemeComponent>
                  );
                }}
              </SettingsConsumer>
            </SettingsProvider>
          </AuthProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
