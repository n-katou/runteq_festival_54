export interface ReusableCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  link: string;
  bgcolor?: string;  // bgcolorは任意のプロパティなので、オプショナルとします
}