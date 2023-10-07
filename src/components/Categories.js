import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  return (
    <section>
      <button
        type="button"
        className="check-status"
        onClick={() => dispatch(checkStatus())}
      >
        Check status
      </button>
      <br />
      <span className="construction">{categories}</span>
    </section>
  );
};

export default Categories;
