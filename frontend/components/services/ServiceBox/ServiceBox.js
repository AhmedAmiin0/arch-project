import {
    Button,
    Excerpt,
    ServiceBoxContent,
    ServiceBoxImage,
    ServiceBoxStyles,
    Subtitle,
    Title
} from "./ServiceBox.styles";
import Image from 'next/image';
import Link from 'next/link';

export default function ServiceBox({ComponentDirection = 'ltr'}) {
    return <ServiceBoxStyles ComponentDirection={ComponentDirection}>
        <ServiceBoxImage>
            <Image src='/1.jpg' layout={'fill'} objectFit={'cover'}/>
        </ServiceBoxImage>
        <ServiceBoxContent>
            <Subtitle>GET INFORMATION</Subtitle>
            <Title>Consultation</Title>
            <Excerpt>Fusce auctor ligula ac facilisis blandit. Suspendisse hendrerit sollicitudin massa, euismod
                interdum nisl. Ut viverra est et ullamcorper sodales. Aliquam molestie magna pretium est lobortis, quis
                commodo mi fringilla. Vivamus et est tincidunt, efficitur dui non, porta augue. Donec pulvinar
                pellentesque ex sed ornare. Curabitur lacus magna, placerat non nisi eget.</Excerpt>
            <Link href='/services/services_over_view'><Button>Read More</Button></Link>
        </ServiceBoxContent>
    </ServiceBoxStyles>
}