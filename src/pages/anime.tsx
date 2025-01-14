import req from "@/utils/request";
import { useCustomQuery } from "@/hooks/use-custom-query";
import RootLayout from "@/components/layouts/layout";
import { AnimeWeeklyLoading } from "@/components/loader/anime-loader";
import {
  AnimeAiring,
  AnimeWeekly,
  SwiperAnime,
} from "@/components/layouts/anime";

const AnimePage = () => {
  const { data: bannerAnime, isLoading: isLoadingBannerAnime } = useCustomQuery(
    ["anime-popular"],
    req.PopularAnime,
  );
  return (
    <RootLayout
      title="Anime"
      description="Stay up-to-date with the latest anime releases. Explore new episodes, series, and exciting titles in the world of Japanese animation. Find release schedules, episode summaries, and streaming options for the hottest anime releases, all in one place"
      className="mx-auto flex max-w-7xl flex-col gap-4 p-3 pb-5 sm:pt-16 xl:flex-row"
    >
      <section className="mt-3 flex w-full flex-col gap-4">
        <div className="relative mx-auto w-full max-w-[948px]">
          <SwiperAnime
            loading={isLoadingBannerAnime}
            bannerAnime={bannerAnime}
            aria-label="swiper-anime"
          />
        </div>
        <AnimeAiring aria-label="airing-anime" />
      </section>
      <aside className="mx-auto h-max w-full max-w-[948px] rounded bg-[#1C1C1C] p-2 xl:mt-3 xl:w-[380px]">
        <h1 className="mb-2 text-xl font-semibold text-primary">
          More Popular Anime Weekly
        </h1>
        {isLoadingBannerAnime ? (
          <AnimeWeeklyLoading />
        ) : (
          <AnimeWeekly
            bannerAnime={bannerAnime?.slice(10, 20)}
            aria-label="weekly-anime"
          />
        )}
      </aside>
    </RootLayout>
  );
};

export default AnimePage;
