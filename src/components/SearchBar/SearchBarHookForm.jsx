import { useForm } from "react-hook-form";
import { HeaderContainer, SearchButton, FormContainer, SearchField } from './SearchBar.styled'

const SearchBarReactHookForm = ({ onSubmit }) => {
    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            query: '',
        },
    })

    const deliveryData = data => {
        const { query } = data;
        onSubmit(query);
        reset();
    };

    return (
        <HeaderContainer>
            <FormContainer onSubmit={handleSubmit(deliveryData)} autoComplete="off">
                <SearchButton type="submit" >
                    <span >Search</span>
                </SearchButton>

                <SearchField
                    {...register("query")}
                    type="text"
                    name="query"
                    autoComplete="off"
                    placeholder="Search images and photos"
                />
            </FormContainer>
        </HeaderContainer>
    );
};

export default SearchBarReactHookForm;
