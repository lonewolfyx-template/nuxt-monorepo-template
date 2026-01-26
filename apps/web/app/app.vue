<script lang="ts" setup>
import { Button } from '@nuxt-monorepo-template/shadcn-vue/components/ui/button'
</script>

<template>
    <div>
        <Button
            as-child
            variant="destructive"
        >
            <span class="text-3xl">hello world</span>
        </Button>
    </div>
</template>
