import tw, { styled, css } from 'twin.macro';

export const StyledContainer = styled.div(({ index }) => [
  css`
    .item-margin {
      ${tw`hidden w-[340px] h-0 bg-transparent`}
      display: none;
    }
    .listItem {
      ${tw`mx-2 h-[220px] md:(h-[200px]) z-10 bg-black overflow-hidden rounded-lg cursor-pointer text-white `}

      .image {
        ${tw`rounded-lg overflow-hidden relative h-full`}
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .title {
          ${tw`pointer-events-none text-2xl pb-3 px-4 pt-24 md:(text-2xl pb-3 px-6) font-bold absolute  left-0 bottom-0 right-0`}
          background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 25%,  rgba(0,0,0,0.3) 50%,rgba(0,0,0,0.6) 75%, rgba(0,0,0,.8) 100%);
        }
      }

      &:hover + .item-margin {
        display: block;
      }
      @media only screen and (min-width: 1280px) {
        &:hover {
          ${tw`absolute border border-[rgba(255,255,255,.15)] w-[14.25%] h-[300px] top-[-70px] rounded-xl  ml-0 mt-4`}
          filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, .5));

          video {
            ${tw`w-full h-[140px] absolute top-0 left-0`}
            object-fit: cover;
          }

          .image {
            ${tw`h-auto`}
            img {
              ${tw`h-[140px]`}
            }
          }

          .itemInfo {
            ${tw`flex flex-col p-4`}

            .itemInfoTop {
              ${tw`flex items-center mb-3 text-base font-bold text-gray-200`}

              .limit {
                ${tw`border border-gray-200 py-1 px-3 mx-4`}
              }
            }

            .desc {
              ${tw`text-sm`}
            }
          }
        }
      }
    }
  `
]);
