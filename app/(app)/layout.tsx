"use client";
import {
  JSXElementConstructor,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";
import { CacheProvider, EmotionCache } from "@emotion/react";

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
import { WordsProvider } from "../context/WordsContext";
import themeConfig from "../configs/themeConfig";

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
      <title>{`${themeConfig.templateName}`}</title>
      <meta name="keywords" content="spaced repetition" />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <body>
        <CacheProvider value={emotionCache}>
          <AuthProvider>
            <WordsProvider>
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
            </WordsProvider>
          </AuthProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
