export interface NavItem {
  label: string;
  href: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface FundInfo {
  label: string;
  value: string;
}

export interface Fund {
  id: string;
  name: string;
  cnpj: string;
  info: FundInfo[];
  objective: string;
  documents: { label: string; href: string }[];
}

export interface Partner {
  id: string;
  src: string;
  alt: string;
}

export interface ProfileCard {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  href: string;
}

export interface FormData {
  type: 'juridica' | 'fisica';
  name: string;
  email: string;
  phone: string;
  message: string;
}
