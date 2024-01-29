interface Props {
    title: string;
    size?: 'sm'| 'md'; // Tamanho do botão (small or medium)
}

export const Button = ({title, size = 'sm'}: Props) => {
    return(
        <button className={`bg-primary text-white font-medium hover:bg-primary/80 duration-300 ${size === 'sm' && 'px-4 py-2 rounded-lg'} ${size === 'md' && 'px-12 py-4 rounded-2xl'}`}>{title}</button>
    )
}