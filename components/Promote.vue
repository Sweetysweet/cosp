<template>
  <section class="promote__container">
    <div class="promote">
      <div class="promote__title">
        <span class="promote__title__text">Opinion Leader? Promote. </span>
        <span class="promote__title__text promote__title__text--accent"
          >Earn</span
        >
      </div>
      <div class="promote__row">
        <div class="promote__left promote__col">
          <div class="promote__number promote__number--left">
            <span class="promote__number__price promote__number__price--left"
              >5,99 <span>$</span></span
            >
          </div>
          <div class="promote__image-handler promote__image-handler--left">
            <img
              class="promote__image"
              src="/images/promoted-1.png"
              alt=""
              srcset=""
            />
          </div>
        </div>

        <div class="promote__right promote__col">
          <div class="promote__image-handler promote__image-handler--right">
            <img
              class="promote__image"
              src="/images/promoted-1.png"
              alt=""
              srcset=""
            />
          </div>
          <div class="promote__number promote__number--right">
            <span class="promote__number__price promote__number__price--right"
              >+ 31,74 <span>% CPC</span></span
            >
          </div>
        </div>
      </div>
      <div class="promote__row">
        <div class="promote__col">
          <div class="promote__description promote__description--left">
            <span class="promote__description-title">Monetization</span>
            <div class="promote__description-details">
              <span class="promote__description-details-light"
                >Create a
                <span class="promote__description-details-bold"
                  >feed with subscription-only content, the cost of a
                  subscription is entirely up to you.</span
                >
                Create and publish promotional posts by selecting the
                advertising category.
              </span>
            </div>
          </div>
        </div>
        <div class="promote__col">
          <div class="promote__description promote__description--right mobile-hidden">
            <span class="promote__description-title">Fewer touchpoints</span>
            <div class="promote__description-details">
              <span class="promote__description-details-light"
                >When you publish a post,
                <span class="promote__description-details-bold"
                  >put a price on a digital version of a photo or video for
                  anyone who wants to buy it
                </span>
                for personal or commercial use with just a couple of clicks in
                the content card. Also, post with a direct link to the product
                in the marketplace.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="promote__row">
        <div class="promote__col promote-access mobile-hidden">
          <div class="promote-access">
            <span class="promote-access__title"> Easy to <span class="promote-access__title promote-access__title--accent">Access</span></span>
            <div
              class="promote__image-handler promote-access__image-handler--left"
            >
              <img
                class="promote__image"
                src="/images/promoted-1.png"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
        <div class="promote__col promote-access promote-access--right">
          <div class="promote-access__description mobile-hidden">
            <span class="promote-access__description-title"
              >Buy and sell without going beyond Incosplay</span
            >
            <div class="promote-access__description-details">
              <span class="promote-access__description-details-light"
                >An assortment of exclusively cosplay products and services.
                <span class="promote-access__description-details-bold"
                  >A special filter to search for products</span
                >
                by cosplay characteristics. High-rating sellers pay half the
                commissions. Tight integration with all ecosystem
                services.</span
              >
            </div>
          </div>
          <div
            class="
              promote-access__description promote-access__description--bottom
            "
          >
            <span class="promote-access__description-title"
              >Easily promote products and your store</span
            >
            <div class="promote-access__description-details">
              <span class="promote-access__description-details-light"
                ><span class="promote-access__description-details-light promote-access__description-details-light--accent">Incosplay</span> offers its own targeted advertising engine.
                <span class="promote-access__description-details-bold"
                  >Pay only for a user's actual participation in an ad.</span
                >
                AI algorithms are constantly learning to maximize CPM for
                advertisers. Determine who your customer is and promote in all
                <span class="promote-access__description-details-light promote-access__description-details-light--accent">Incosplay</span> services at once:</span
              >
              <span class="promote-access__description-details-bold"
                >Social networks, marketplaces, streaming platforms, AR, VR,
                Metaworld.</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Promote",
};
</script>
<style lang="scss" >
@import "./Promote.scss";
</style>