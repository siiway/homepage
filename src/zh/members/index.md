# Members

<script setup>
import { data as d } from '../../.vitepress/data/members-zh.data.ts'
</script>

SiiWay 团队目前有 {{ d.count }} 位成员（按加入时间排序）：

<div class="members-grid" v-html="d.members" />
