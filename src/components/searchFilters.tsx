// Tailwind
import { Disclosure } from '@headlessui/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid';

interface SearchFiltersProps {
  label?: string,
  filters: string[],
  selectedFilters: string[],
  changeFilter: Function
}

const SearchFilters = (props: React.PropsWithChildren<SearchFiltersProps>) => {
  const { label, filters, selectedFilters, changeFilter } = props;

  const handleFilterChange = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      const newFilters = selectedFilters.filter((f: string) => f !== filter);
      changeFilter(newFilters);
    } else {
      const newFilters = [...selectedFilters, filter];
      changeFilter(newFilters);
    }
  }

  return (
    <form className="lg:block">
      <Disclosure as="div" className="border-b border-gray-200 py-5">
        {({ open }) => (
          <>
            <h3 className="-my-3 flow-root">
              <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                <span className="font-semibold text-gray-900">{label}</span>
                <span className="ml-6 flex items-center">
                  {open ? (
                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                  )}
                </span>
              </Disclosure.Button>
            </h3>
            <Disclosure.Panel className="pt-2">
              <div className="space-y-2 overflow-auto">
                {filters.map((filter: string, idx: number) => (
                  <div key={idx} className="flex items-center">
                    <input
                      id={`filter-${filter}-${idx}`}
                      name={`${filter}[]`}
                      defaultChecked={selectedFilters.includes(filter)}
                      type="checkbox"
                      onClick={() => handleFilterChange(filter)}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      htmlFor={`filter-${filter}-${idx}`}
                      className="ml-3 text-sm text-gray-600"
                    >
                      {filter}
                    </label>
                  </div>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </form>
  )
}

export default SearchFilters;