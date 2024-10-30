export type PortalProps = {
  onClose?: () => void;
  title?: string;
  amount?: string;
};

export type ImgType = {
  id: number;
  link: string;
  alt: string;
};

export type FormData = {
  name: string;
  tel: string;
  email: string | null;
};
