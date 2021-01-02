import {useRouter} from 'next/router'
import Modal from './modal'
import ModalForm from './modal-form'
import {addMovie} from '../actions/index'

const SideMenu = ({ categories, changeCategory, activeCategory}) => {
    let modal = null
    const router = useRouter()

    const handleAddMovie = (movie) => {
        addMovie(movie).then((movies) => {
            console.log(JSON.stringify(movies))
            modal.submitModal()
            router.push('/')
        })
    }

    return (
        <div>
            <div className="list-group mt-4">
                {
                    categories.map(category => 
                        <a
                            onClick={() => {changeCategory(category.name)}}
                            key={category.id}
                            href="#" 
                            className={`list-group-item ${activeCategory === category.name && 'active'}`}>{category.name}
                        </a>
                    )
                }
            </div>
                <div className="mt-2">
                    <Modal ref={elem => modal = elem} hasSubmit={false}>
                        <ModalForm handleFormSubmit={handleAddMovie}/>
                    </Modal>
                </div>
        </div>
    )
}

export default SideMenu;