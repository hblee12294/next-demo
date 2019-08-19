import NextHead from 'next/head'

interface HeadProps {
  title?: string
}

const Head = ({ title }: HeadProps) => (
  <>
    <NextHead>
      <title>{title || 'ALLRIDE'}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </NextHead>

    <style jsx global>
      {`
        body {
          font-family: Helvetica, sans-serif;
          font-size: 16px;
          margin: 0;
          padding: 0;
        }
      `}
    </style>
  </>
)

export default Head
