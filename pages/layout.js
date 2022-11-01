import Footer from '@/components/layout/Footer';
import NavigationBar from '@/components/layout/NavigationBar';

export default function RootLayout({ children }) {
  return (
    <>
      <NavigationBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
