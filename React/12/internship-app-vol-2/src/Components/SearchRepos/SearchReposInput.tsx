interface SearchReposInputProps {
    onInputChange: (value: string) => void;
}

const SearchReposInput = ({onInputChange}: SearchReposInputProps) => {

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onInputChange(event.target.value)
    }

    return (
        <div className="search-repos=results-main">
            <input type="text" placeholder="Enter GitHub username" onChange={handleInputChange}/>
        </div>
    )
}

export default SearchReposInput;
