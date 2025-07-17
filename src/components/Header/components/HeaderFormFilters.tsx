import { FaLocationDot } from "react-icons/fa6";
import SelectorGroup from "../../Selector/SelectorGroup";
import SelectorOption from "../../Selector/SelectorOption";
import useFetchCities from "../../../hooks/useFetchCities";


const HeaderFormFilters = () => {
    const {cities, isLoading, error } = useFetchCities();

    return (
        <form>
            <SelectorGroup id='cidade' icon={<FaLocationDot/>}>
                <SelectorOption value="" label="Escolha sua cidade..."/>
                
                {isLoading && <SelectorOption value="" label="Carregando cidades..." disabled />}
                {error && <SelectorOption value="" label={error} disabled />}



                {cities.map((cidade) => {
                    return (
                        <SelectorOption 
                            key={cidade.id} 
                            value={cidade.nome}
                            label={cidade.nome}
                        />
                    );
                })}
            </SelectorGroup>
        </form>
    )
};

export default HeaderFormFilters;