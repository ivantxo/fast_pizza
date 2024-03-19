import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decItemQty, incItemQty } from './carSlice';

function UpdateItemQty({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type="round" onClick={() => dispatch(decItemQty(pizzaId))}>
        -
      </Button>
      <Button type="round" onClick={() => dispatch(incItemQty(pizzaId))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQty;
