import tw, { styled } from 'twin.macro';

export const StyledContainer = styled.div`
  ${tw`flex flex-col-reverse w-full relative py-6 relative min-h-[250px] h-full max-h-[100%] overflow-hidden`}

  .content {
    ${tw`relative self-end flex flex-col gap-8 md:(flex-col py-12) w-full bg-transparent justify-center`}

    .left {
      ${tw`z-50 flex flex-col gap-4 p-4 md:(gap-10 pl-20 pr-0) lg:(pl-40)`}
      .title {
        ${tw`font-bold text-blue-700 z-10 flex flex-col text-7xl lg:(text-8xl)`}
        font-family:'Amatic';
      }

      .desc {
        ${tw`font-medium z-10 text-base md:(text-lg max-w-[60%]) lg:(text-2xl)  drop-shadow-sm `}
      }

      .action {
        ${tw`z-10`}
        button {
          ${tw`text-white bg-blue-700 w-max py-3 px-4 rounded-lg font-bold text-base md:(text-xl)`}
        }
      }
    }

    .background {
      z-index: -1;
      ${tw`hidden md:(inline) relative w-[95%] mx-auto rounded-xl overflow-hidden md:(w-full absolute overflow-visible h-full) `}

      .image {
        ${tw`md:(absolute) top-0 bottom-0 min-h-[200px] w-full block mb-6 md:(mb-0 absolute h-auto top-0 right-0 bottom-0 w-full max-w-[60%]) `}

        img {
          object-fit: cover;
        }
      }

      .gradient {
        ${tw`md:(absolute top-0 left-0 right-0 bottom-0)`}
        background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 10%, rgba(0,0,0,1) 40%, rgba(0,0,0,0.6) 80%, rgba(0,0,0,0) 100%);
      }
    }

    .slider {
      ${tw`px-0 md:(px-12) `}
    }
  }
`;
