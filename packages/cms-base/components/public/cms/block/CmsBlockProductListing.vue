<script setup lang="ts">
import { CmsBlockProductListing } from "@shopware-pwa/composables-next";

const props = defineProps<{
  content: CmsBlockProductListing;
}>();

const { getSlotContent } = useCmsBlock(props.content);
const slotContent = getSlotContent("content");
</script>

<template>
  <div>
    <CmsGenericElement v-if="slotContent" :content="slotContent" />
  </div>
</template>
