import { FC, ReactNode, createContext, useContext, useState } from "react";

const LoaderContext = createContext<{
  openWithbackdrop: boolean;
  openLoader: boolean;
  onCloseLoaderWithbackdrop: () => void;
  onOpenLoaderWithbackdrop: () => void;
  onOpenLoader: () => void;
  onCloseLoader: () => void;
}>({
  openWithbackdrop: false,
  openLoader: false,
  onCloseLoaderWithbackdrop: () => {},
  onOpenLoaderWithbackdrop: () => {},
  onOpenLoader: () => {},
  onCloseLoader: () => {},
});

export const useLoader = () => useContext(LoaderContext);

interface LoaderProviderProps {
  children: ReactNode;
}

const LoaderProvider: FC<LoaderProviderProps> = ({ children }) => {
  const [openWithbackdrop, setOpenWithBackdrop] = useState(false);
  const [openLoader, setOpenLoader] = useState(false);

  const onOpenLoaderWithbackdrop = () => setOpenWithBackdrop(true);
  const onCloseLoaderWithbackdrop = () => setOpenWithBackdrop(false);

  const onOpenLoader = () => setOpenLoader(true);
  const onCloseLoader = () => setOpenLoader(false);

  return (
    <LoaderContext.Provider
      value={{
        openWithbackdrop,
        openLoader,
        onCloseLoaderWithbackdrop,
        onOpenLoaderWithbackdrop,
        onOpenLoader,
        onCloseLoader,
      }}
    >
      {children}
    </LoaderContext.Provider>
  );
};

export { LoaderProvider };
