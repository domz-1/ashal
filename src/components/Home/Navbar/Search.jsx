import { IoSearch } from 'react-icons/io5';

const Search = () => {
    return (
        <div className="search">
            <input
                type="search"
                name="search"
                id="search"
                className="search-input"
                placeholder="إبحث عن منتجات، علامات تجارية، أقسام.."
            />
            <IoSearch className="search-icon" />
        </div>
    );
};

export default Search;
