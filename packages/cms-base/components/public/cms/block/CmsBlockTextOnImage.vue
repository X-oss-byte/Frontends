<script setup lang="ts">
import { CmsBlockTextOnImage } from "@shopware-pwa/composables-next";

const props = defineProps<{
  content: CmsBlockTextOnImage;
}>();

const { getSlotContent } = useCmsBlock(props.content);

const slotContent = getSlotContent("content");
</script>

<template>
  <CmsGenericElement
    v-if="slotContent"
    :content="slotContent"
    class="cms-block-text-on-image min-h-md"
  />
</template>
