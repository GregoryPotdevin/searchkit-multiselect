# searchkit-multiselect

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

MultiSelect component for Searchkit, using react-select

[build-badge]: https://img.shields.io/travis/user/repo/master.svg?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.svg?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.svg?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo

![Preview](doc/preview.png?raw=true "Preview")

## Installation

`npm install searchkit-multiselect --save`

## Features

- MultiSelect listComponent for `RefinementListFilter` and other compatible components
- Dynamically filter the facet list
- See `react-select` for a complete list of features

### Initial style

![Initial](doc/initial.png?raw=true "Initial")

### Dropdown

![Dropdown](doc/dropdown.png?raw=true "Dropdown")

## Usage

```
import MultiSelect from "searchkit-multiselect"
```

```
<RefinementListFilter
  id="actors"
  title="Actors"
  field="actors.raw"
  operator="AND"
  listComponent={MultiSelect}
  size={200}/>
```

It is recommended to increase the size to benefit from the filter functionnality.

## Example

```
const Demo = React.createClass({
  render() {
    return (
      <SearchkitProvider searchkit={searchkit}>
        <Layout>
          <TopBar>
            <SearchBox
              autofocus={true}
              searchOnChange={true}
              prefixQueryFields={["actors^1","type^2","languages","title^10"]}/>
          </TopBar>
          <LayoutBody>
            <SideBar>
              <HierarchicalMenuFilter
                fields={["type.raw", "genres.raw"]}
                title="Categories"
                id="categories"/>
              <RefinementListFilter
                id="actors"
                title="Actors"
                field="actors.raw"
                operator="AND"
                listComponent={MultiSelect}
                size={200}/>
              <RefinementListFilter
                id="writers"
                title="Writers"
                field="writers.raw"
                operator="AND"
                listComponent={MultiSelect}
                size={200}/>
            </SideBar>
            <LayoutResults>
              <Hits mod="sk-hits-grid" hitsPerPage={10} itemComponent={MovieHitsGridItem}
                sourceFilter={["title", "poster", "imdbId"]}/>
              <NoHits/>
            </LayoutResults>
          </LayoutBody>
        </Layout>
      </SearchkitProvider>
    )
  }
})
```

## License

MIT