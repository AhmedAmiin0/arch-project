import Image from 'next/image';
import {AttractiveImageWrapper, AttractiveSectionWrapper} from "./AttractiveSection.styles";

export default function AttractiveSection({data}) {
    return <AttractiveSectionWrapper>
        {/*<AttractiveImageWrapper >*/}
        {/*    <Image src={data.attractiveImage} layout={'responsive'} width={'100%'} height={'100%'} objectFit={'cover'}/>*/}
        {/*</AttractiveImageWrapper>*/}
    </AttractiveSectionWrapper>
}