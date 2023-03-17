export default function SectionHeading({ title, subtitle, rightComponent, useMargin = true, noMargin = false }) {
  return (
    <div className={noMargin ? "" : `md:py-4 ${useMargin && ''}`}>
      <div className={noMargin ? "" : "-ml-4 md:-mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap"}>
        <div className={noMargin ? "" : "ml-4 mt-4"}>
          <h3 className="text-xl leading-6 font-bold text-gray-900">{title}</h3>
          <p className="mt-1 text-sm text-gray-500">
            {subtitle}
          </p>
        </div>
        <div className="ml-4 mt-4 flex-shrink-0 inline-flex">
          {rightComponent}
        </div>
      </div>
    </div>
  )
}
