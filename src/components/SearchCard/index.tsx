
import ButtonSearch from '../ButtonSearch';
import './styles.css'

const SearchCard = () => {
    return (
        <div className="base-card search-card">
            <div className="card-container">
                <input type='text' placeholder='Digite sua busca'></input>
                <ButtonSearch/>
            </div>
        </div>
    );
}

export default SearchCard;