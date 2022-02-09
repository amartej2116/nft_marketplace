import React, { FC } from 'react';

import {
  AccountsProvider,
  ConnectionProvider,
  MetaProvider,
  StoreProvider,
  WalletProvider,
} from '@oyster/common';

import { ConfettiProvider } from './components/Confetti';
import { AppLayout } from './components/Layout';
import { LoaderProvider } from './components/Loader';
import { CoingeckoProvider } from './contexts/coingecko';
import { SPLTokenListProvider } from './contexts/tokenList';

export const Providers: FC = ({ children }) => {
  return (
    <ConnectionProvider>
      <WalletProvider>
        <AccountsProvider>
          <SPLTokenListProvider>
            <CoingeckoProvider>
              <StoreProvider
                ownerAddress={process.env.NEXT_PUBLIC_STORE_OWNER_ADDRESS}
                storeAddress={process.env.NEXT_PUBLIC_STORE_ADDRESS}
              >
                <MetaProvider>
                  <LoaderProvider>
                    <ConfettiProvider>
                      <AppLayout>{children}</AppLayout>
                    </ConfettiProvider>
                  </LoaderProvider>
                </MetaProvider>
              </StoreProvider>
            </CoingeckoProvider>
          </SPLTokenListProvider>
        </AccountsProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
