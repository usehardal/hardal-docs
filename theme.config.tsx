import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const logo = (
  <span>
    <svg
      height="50"
      viewBox="0 0 361 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M.908 38V.943h6.67v14.029h.953c.282-.565.723-1.13 1.323-1.694.6-.565 1.394-1.024 2.382-1.376 1.024-.389 2.312-.583 3.865-.583 2.047 0 3.829.477 5.347 1.43 1.552.917 2.752 2.205 3.6 3.864.846 1.623 1.27 3.53 1.27 5.717V38h-6.67V22.86c0-1.977-.494-3.459-1.483-4.447-.953-.988-2.329-1.482-4.129-1.482-2.047 0-3.635.688-4.764 2.064-1.13 1.341-1.694 3.23-1.694 5.665V38H.908Zm38.39.741c-1.87 0-3.546-.318-5.028-.953-1.483-.67-2.665-1.623-3.547-2.858-.847-1.27-1.27-2.806-1.27-4.606 0-1.8.423-3.3 1.27-4.5.882-1.235 2.082-2.153 3.6-2.753 1.553-.635 3.317-.952 5.294-.952h7.199v-1.483c0-1.235-.388-2.24-1.165-3.017-.776-.812-2.011-1.218-3.705-1.218-1.659 0-2.894.389-3.706 1.165-.812.741-1.341 1.712-1.588 2.912l-6.14-2.065a10.605 10.605 0 0 1 2.01-3.653c.954-1.13 2.206-2.03 3.76-2.7 1.588-.706 3.51-1.058 5.77-1.058 3.458 0 6.193.864 8.205 2.594 2.012 1.729 3.018 4.235 3.018 7.517v9.793c0 1.06.494 1.588 1.482 1.588h2.117V38h-4.447c-1.305 0-2.382-.318-3.229-.953s-1.27-1.482-1.27-2.54v-.054h-1.006c-.141.424-.459.988-.953 1.694-.494.67-1.27 1.27-2.33 1.8-1.058.53-2.505.794-4.34.794Zm1.166-5.4c1.87 0 3.388-.511 4.552-1.535 1.2-1.059 1.8-2.453 1.8-4.182v-.53h-6.723c-1.235 0-2.206.265-2.912.795s-1.058 1.27-1.058 2.223c0 .953.37 1.73 1.111 2.33.741.6 1.818.9 3.23.9ZM59.369 38V11.743h6.564v2.964h.953c.388-1.059 1.024-1.835 1.906-2.329.918-.494 1.976-.741 3.176-.741h3.176v5.929h-3.282c-1.694 0-3.088.459-4.182 1.376-1.094.883-1.64 2.259-1.64 4.13V38h-6.671Zm28.264.741c-2.082 0-4.041-.512-5.876-1.535-1.8-1.059-3.247-2.594-4.341-4.606-1.094-2.011-1.641-4.447-1.641-7.305v-.847c0-2.859.547-5.294 1.64-7.306 1.095-2.011 2.542-3.529 4.342-4.552 1.8-1.059 3.758-1.588 5.876-1.588 1.588 0 2.912.194 3.97.582 1.094.353 1.977.812 2.647 1.376.67.565 1.182 1.165 1.535 1.8h.953V.943h6.67V38h-6.564v-3.176h-.953c-.6.988-1.535 1.888-2.806 2.7-1.235.811-3.052 1.217-5.452 1.217Zm2.012-5.823c2.047 0 3.758-.653 5.135-1.959 1.376-1.34 2.064-3.282 2.064-5.823v-.53c0-2.54-.688-4.464-2.064-5.77-1.342-1.34-3.053-2.011-5.135-2.011-2.047 0-3.759.67-5.135 2.011-1.377 1.306-2.065 3.23-2.065 5.77v.53c0 2.541.688 4.482 2.065 5.823 1.376 1.306 3.088 1.959 5.135 1.959Zm26.929 5.823c-1.871 0-3.547-.318-5.029-.953-1.483-.67-2.665-1.623-3.547-2.858-.847-1.27-1.271-2.806-1.271-4.606 0-1.8.424-3.3 1.271-4.5.882-1.235 2.082-2.153 3.6-2.753 1.553-.635 3.317-.952 5.293-.952h7.2v-1.483c0-1.235-.388-2.24-1.165-3.017-.776-.812-2.011-1.218-3.705-1.218-1.659 0-2.894.389-3.706 1.165-.812.741-1.341 1.712-1.588 2.912l-6.141-2.065a10.607 10.607 0 0 1 2.012-3.653c.953-1.13 2.206-2.03 3.758-2.7 1.589-.706 3.512-1.058 5.771-1.058 3.458 0 6.193.864 8.205 2.594 2.012 1.729 3.017 4.235 3.017 7.517v9.793c0 1.06.495 1.588 1.483 1.588h2.117V38h-4.447c-1.305 0-2.382-.318-3.229-.953s-1.27-1.482-1.27-2.54v-.054h-1.006c-.141.424-.459.988-.953 1.694-.494.67-1.27 1.27-2.329 1.8-1.059.53-2.506.794-4.341.794Zm1.164-5.4c1.871 0 3.389-.511 4.553-1.535 1.2-1.059 1.8-2.453 1.8-4.182v-.53h-6.723c-1.235 0-2.206.265-2.912.795-.705.53-1.058 1.27-1.058 2.223 0 .953.37 1.73 1.111 2.33.741.6 1.818.9 3.229.9ZM136.644 38V.943h6.67V38h-6.67Z" fill="currentColor"></path>
    </svg>
    <style jsx>{`
      span {
        padding: 0.5rem 0.5rem 0.5rem 0;
        margin-top: 1rem;
        mask-image: linear-gradient(
          60deg,
          black 25%,
          rgba(0, 0, 0, 0.2) 50%,
          black 75%
        );
        mask-size: 400%;
        mask-position: 0%;
      }
      span:hover {
        mask-position: 100%;
        transition: mask-position 1s ease, -webkit-mask-position 1s ease;
      }
    `}</style>
  </span>
)

const config: DocsThemeConfig = {
  project: {
    link: 'https://github.com/usehardal/docs'
  },
  chat: {
    link: 'https://discord.gg/EJrrBGEhX3'
  },
  docsRepositoryBase: 'https://github.com/usehardal/docs',
  useNextSeoProps() {
    const { route } = useRouter()
    if (route !== '/') {
      return {
        titleTemplate: '%s – Hardal'
      }
    }
  },
  logo,
  head: () => {
    const { title } = useConfig()
    const { route } = useRouter()
    const socialCard =
      route === '/' || !title
        ? 'https://docs.usehardal.com/og.jpg'
        : `https://docs.usehardal.com/api/og?title=${title}`

    return (
      <>
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="Hardal is designed to help you understand and improve the user experience on your website by collecting cookieless and privacy-first and analyzing a variety of UX metrics on web2 and web3 ecosystem. "
        />
        <meta
          name="og:description"
          content="Hardal is designed to help you understand and improve the user experience on your website by collecting cookieless and privacy-first and analyzing a variety of UX metrics on web2 and web3 ecosystem."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="usehardal.com" />
        <meta name="twitter:url" content="https://usehardal.com" />
        <meta
          name="og:title"
          content={title ? title + ' – Hardal' : 'Hardal'}
        />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="Hardal" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/favicon.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    )
  },
  // banner: {
  //   key: '2.0-release',
  //   text: (
  //     <a href="" target="_blank" rel="noreferrer">
  //       🎉 Hardal Beta is released. Read more →
  //     </a>
  //   )
  // },
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  feedback: {
    content: () => <>Question? Give us feedback →</>,
    labels: 'feedback'
  },
  sidebar: {
    titleComponent: ({ title, type }) => {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 0
  },
  footer: {
    text: () => {
      return (
        <div className="flex w-full flex-col items-center sm:items-start">
          <div>

          </div>
          <p className="mt-6 text-xs">© 2023 Hardal.</p>
        </div>
      )
    }
  }
}

export default config
