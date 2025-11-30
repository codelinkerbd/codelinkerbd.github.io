const FeatureList = [
  {
    title: 'Custom ERP & Business Automation Solutions',
    Svg: require('@site/static/img/erpsoft.svg').default,
    description: (
      <>
        End-to-end ERP systems tailored to streamline operations, enhance workflows, and improve decision-making.
        Includes: Inventory, Accounting, HRM, CRM, Production, SCM, POS & more.
      </>
    )
  },
  {
    title: 'Web & Mobile Application Development',
    Svg: require('@site/static/img/webdev.svg').default,
    description: (
      <>
        High-performance web platforms and mobile apps engineered for scalability, security, and seamless user experience.
        Includes: SaaS platforms, business apps, API development, cross-platform mobile apps.
      </>
    )
  },
  {
    title: 'Cloud Infrastructure & System Integration',
    Svg: require('@site/static/img/infra.svg').default,
    description: (
      <>
        Secure cloud deployment and integration services that connect business systems into one unified digital environment.
        Includes: Cloud migration, DevOps setup, API integration, third-party system connectivity.
      </>
    )
  }
]

function Feature({ Svg, title, description }) {
  return (
    <div>
      <div className='text--center'>
        <Svg className='mx-auto h-52 w-52' role='img' />
      </div>
      <div className='text--center padding-horiz--md'>
        <p className='mb-2 text-xl font-bold'>{title}</p>
        <p className='mx-auto max-w-sm'>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className='py-10'>
      <div className='mx-auto max-w-7xl'>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
