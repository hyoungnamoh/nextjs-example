const Layout = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

Layout.getInitalProps = async (context) => { //next에서 내려주는 context, 안에 페이지나 ctx가 들어있음
  let pageProps = {};
  if (context.Component.getInitalProps) { //페이지에 getInitalProps가 있으면
    pageProps = await context.Component.getInitalProps(context.ctx); // getInitalProps 실행
  }
  return pageProps;
}

export default Layout;