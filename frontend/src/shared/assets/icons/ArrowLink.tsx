export interface ArrowLinkProps{
    isWhite?: boolean;
}
export const ArrowLink = ({isWhite} : ArrowLinkProps) => {
    const color = isWhite ? '#FFFFFF' : '#0B0D20';
    return (
        <svg width="13" height="13" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.19477 11.0268C0.916771 11.2902 0.479603 11.2843 0.208821 11.0135C-0.0725096 10.7322 -0.0663214 10.2742 0.222507 10.0006L9.19531 1.5H1.94531C1.5311 1.5 1.19531 1.16421 1.19531 0.75C1.19531 0.335786 1.5311 0 1.94531 0H10.6453C11.2252 0 11.6953 0.470101 11.6953 1.05V9.75C11.6953 10.1642 11.3595 10.5 10.9453 10.5C10.5311 10.5 10.1953 10.1642 10.1953 9.75V2.5L1.19477 11.0268Z" fill={color}/>
        </svg>
    );
};
