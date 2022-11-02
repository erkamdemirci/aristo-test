import tw, { styled, css } from 'twin.macro';

export const StyledContainer = styled.div`
  ${tw`relative h-[750px] lg:(h-[650px]) xl:(h-[750px]) mx-4`}

  .content {
    ${tw`mx-0 bottom-0 rounded-b-3xl lg:(mx-12 bottom-2 rounded-3xl) p-8 xl:(mx-24 w-[70%] bottom-24 p-8 pt-12) absolute left-0 right-0 bg-gray-900 bg-opacity-[95%] flex flex-col gap-4 shadow-2xl border-4 border-gray-800`}

    .testimonial {
      ${tw`tracking-normal leading-tight text-sm lg:(leading-normal) sm:(text-lg) md:(text-lg tracking-wide) xl:(text-xl) font-normal `}
      &::before {
        content: '“';
        ${tw`mr-2 text-xl`}
      }
      &::after {
        content: '”';
        ${tw`ml-2 text-xl`}
      }
    }

    .author {
      ${tw`flex flex-col self-end text-lg xl:(text-2xl)`}

      .name {
        ${tw`font-bold`}
      }
      .title {
        ${tw`self-end`}
      }
    }
  }

  .background {
    ${tw`absolute left-0 right-0 lg:(left-[35%] right-[5%]) xl:(left-[55%] right-[5%]) top-0 bottom-0 z-[-1] shadow-2xl`}

    img {
      ${tw`rounded-3xl`}
      object-fit: cover;
    }
  }
`;
