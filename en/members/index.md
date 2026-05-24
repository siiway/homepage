# Members

<script setup>
import { data as d } from '../../.vitepress/data/members-en.data.ts'
</script>

SiiWay Team now has {{ d.count }} members (in order of joining):

> [!WARNING]
> Some contents below are only available in Chinese, you may need a translator to view them.

<div class="members-grid" v-html="d.members" />
