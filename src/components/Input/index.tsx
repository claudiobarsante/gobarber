import React, {
  useCallback,
  useRef,
  useState,
  InputHTMLAttributes,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { Container } from './styles';
import { useForm, Controller } from 'react-hook-form';

/*
1-To extend all properties of the input 
2-If you nedd to  overwrite the property <name> of an input, just declare it
it as required
*/
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  inputRef: any;
  error: string | undefined;
  icon?: React.ComponentType<IconBaseProps>; //to receive a component as property
  //and to add the properties from react-icons, must pass type as IconBaseProps
}
const Input = ({ name, inputRef, error, icon: Icon, ...rest }: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [value, setValue] = useState('');

  const methods = useForm();
  const { control, getValues } = methods;

  const handleOnFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    console.log('get ', getValues('email'));
    setIsFocused(false);
  }, [getValues]);

  const handleOnChange = useCallback(text => {
    console.log('text ', text);
    setValue(text);
  }, []);

  console.log('isFocused ', isFocused);
  return (
    <Container isErrored={!!error} isFocused={isFocused} isFilled={isFilled}>
      {Icon && <Icon size={20} />}
      {/* <input
        name={name}
        onFocus={handleOnFocus}
        onBlur={handleInputBlur}
        ref={inputRef}
        {...rest}
      /> */}
      <Controller
        name={name}
        control={control}
        render={props => (
          <input
            onFocus={handleOnFocus}
            onBlur={handleInputBlur}
            // onChange={e => props.onChange(setValue(e.target.value))}
            ref={inputRef}
            {...rest}
            // value={value}
          />
        )}
      />
    </Container>
  );
};

export default Input;
