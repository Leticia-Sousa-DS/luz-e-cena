import { FaLocationDot } from "react-icons/fa6";
import SelectorGroup from "../../Selector/SelectorGroup";
import SelectorOption from "../../Selector/SelectorOption";

const cidades = [
    { id: 1, nome: "Rio Branco"},
    { id: 2, nome: "Maceió"},
    { id: 3, nome: "Macapá"},
    { id: 4, nome: "Manaus"},
    { id: 5, nome: "Salvador"},
    { id: 6, nome: "Fortaleza"},
];

const HeaderFormFilters = () => {
    return (
        <form>
            <SelectorGroup id='cidade' icon={<FaLocationDot/>}>
                <SelectorOption value="" label="Escolha sua cidade..."/>
                {cidades.map((cidade) => {
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