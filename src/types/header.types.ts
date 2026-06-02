export interface CVHeaderProps {
  name: string;
  positioning: string;
  strapline: string;
  qrCode?: {
    label: string;
    url: string;
  };
}
