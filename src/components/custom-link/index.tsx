import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

interface CustomLinkProps {
  to: string;
  children: ReactNode;
  styles?: {};
}

const CustomLink: FC<CustomLinkProps> = ({
  to,
  children,
  styles,
  ...props
}) => {
  return (
    <Link to={to} {...props} style={styles}>
      {children}
    </Link>
  );
};

export { CustomLink };
