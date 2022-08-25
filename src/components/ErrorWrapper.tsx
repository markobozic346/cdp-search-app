import { FC, PropsWithChildren } from "react";

import ErrorMessage from "./ErrorMessage";

type Props = {
  isError: boolean;
};

const ErrorWrapper: FC<PropsWithChildren<Props>> = ({ isError, children }) => {
  return <>{isError ? <ErrorMessage /> : children}</>;
};

export default ErrorWrapper;
