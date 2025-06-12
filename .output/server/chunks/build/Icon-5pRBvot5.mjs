import { computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main = {
  __name: "Icon",
  __ssrInlineRender: true,
  props: {
    icon: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: "#000"
    },
    fontSize: {
      type: String,
      default: "16px"
    },
    style: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const computedStyle = computed(() => ({
      color: props.color,
      fontSize: props.fontSize,
      ...props.style
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<i${ssrRenderAttrs(mergeProps({
        class: `bx ${__props.icon}`,
        style: computedStyle.value
      }, _attrs))}></i>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Icon-5pRBvot5.mjs.map
