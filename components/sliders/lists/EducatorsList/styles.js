import tw, { styled } from 'twin.macro';

export const StyledContainer = styled.div`
  ${tw`w-full`}

  .content {
    ${tw`flex flex-col md:(flex-row) lg:(my-24) w-full justify-center gap-8 items-center`}

    .educatorsSwiper {
      filter: drop-shadow(0px 0px 25px rgba(96, 118, 190, 0.5));
      ${tw`w-full max-w-[350px] h-[400px] md:(h-[450px]) mx-auto px-8 overflow-hidden `}

      .swiper-slide-shadow {
        ${tw`bg-transparent`}
      }
      .swiper-button-next,
      .swiper-button-prev {
        ${tw`top-[45%]`}
        filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.4));
      }
    }

    .lessonsSwiper {
      ${tw`h-[380px] w-full md:(w-[60%]) lg:(w-[60%]) xl:(w-[75%])`}

      .swiper-slide:first-child .listItem {
        &:hover {
          ${tw`left-8`}
        }
      }

      .swiper-slide:last-child .listItem {
        &:hover {
          ${tw`right-0`}
        }
      }
    }

    .swiper-button-next,
    .swiper-button-prev {
      ${tw`bg-white bg-opacity-100 w-12 h-12 rounded-full text-black drop-shadow-2xl`}

      &::after {
        ${tw`text-2xl`};
      }
    }
  }
`;

export const Header = styled.div`
  ${tw`flex flex-col gap-4 mb-4 lg:(mb-12)`}

  .subtitle {
    ${tw`text-[#DA00FF] font-bold text-lg md:(text-xl)`}
  }

  .title {
    ${tw`text-3xl md:(text-4xl) lg:(text-5xl) font-bold`}
  }
`;
