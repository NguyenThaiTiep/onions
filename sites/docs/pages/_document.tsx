import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

export interface DocumentProps {
  config: object;
}

export default class MyDocument extends Document<DocumentProps> {
  static getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="vi">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
