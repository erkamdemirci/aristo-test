import tw, { styled } from 'twin.macro';

export const StyledContainer = styled.div`
  ${tw`container mx-auto flex flex-col lg:(flex-row) gap-4 py-12 items-center px-4`}

  .left {
    ${tw`flex flex-col gap-4 pr-8 w-full lg:(w-[40%]) 2xl:(w-[50%])`}
    .title {
      ${tw`text-5xl font-bold`}
    }
    .subtitle {
      ${tw`text-2xl font-medium`}
    }
    .seperator {
      ${tw` w-24 h-2 bg-purple-500 rounded-full my-4`}
    }
    .desc {
      ${tw`text-lg`}
    }
  }

  .right {
    ${tw`flex flex-col gap-6 w-full lg:(w-[60%]) 2xl:(w-[50%])`}
    .image {
      ${tw`w-full h-[300px] relative rounded-3xl overflow-hidden`}
      img {
        ${tw`w-full h-full`}
        object-fit: cover;
      }
    }

    .app-links {
      ${tw`flex flex-col md:(flex-row) gap-4 relative`}
      .app-link {
        ${tw`flex flex-row w-full lg:(w-max) border-2 px-4 xl:(px-6) py-2 rounded-xl gap-2 pt-4 transition-all duration-300`}

        &:hover {
          ${tw`bg-gray-900 border-gray-600`}
        }

        .app-icon {
          ${tw`w-8 h-8`}
        }
        .info {
          ${tw`flex flex-col`}
          .app-name {
            ${tw`font-bold text-lg`}
            line-height:15px;
          }
          .app-text {
            ${tw``}
          }
        }
        .arrow-right-icon {
          ${tw`w-8 h-8 absolute right-5 md:(hidden)`}
        }
      }
    }
  }
`;
