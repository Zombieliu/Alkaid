System.register("q-bundled:///fs/cocos/gfx/webgl2/webgl2-commands.js", ["../base/define.js", "./webgl2-define.js", "../../core/index.js"], function (_export, _context) {
  "use strict";

  var BufferUsageBit, ColorMask, CullMode, DynamicStateFlagBit, Filter, Format, TextureType, Type, FormatInfos, FormatSize, LoadOp, MemoryUsageBit, SampleCount, ShaderStageFlagBit, TextureFlagBit, Rect, DrawInfo, DynamicStates, UniformSamplerTexture, alignTo, Extent, formatAlignment, getTypedArrayConstructor, Offset, WebGL2EXT, CachedArray, error, errorID, debug, cclegacy, assertID, WebGL2CmdObject, WebGL2CmdBeginRenderPass, WebGL2CmdBindStates, WebGL2CmdDraw, WebGL2CmdUpdateBuffer, WebGL2CmdCopyBufferToTexture, WebGL2CmdBlitTexture, WebGL2CmdPackage, WebGLWraps, _f32v4, WebGLCmpFuncs, WebGLStencilOps, WebGLBlendOps, WebGLBlendFactors, WebGL2Cmd, gfxStateCache, cmdIds, stagingBuffer;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2020-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             https://www.cocos.com/
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                                                                                                                                                                                                                                                             of this software and associated documentation files (the "Software"), to deal
                                                                                                                                                                                                                                                                                                                                                                                             in the Software without restriction, including without limitation the rights to
                                                                                                                                                                                                                                                                                                                                                                                             use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
                                                                                                                                                                                                                                                                                                                                                                                             of the Software, and to permit persons to whom the Software is furnished to do so,
                                                                                                                                                                                                                                                                                                                                                                                             subject to the following conditions:
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             The above copyright notice and this permission notice shall be included in
                                                                                                                                                                                                                                                                                                                                                                                             all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                                                                                                                                                                                                                                                             IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                                                                                                                                                                                                                                                             FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                                                                                                                                                                                                                                                             AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                                                                                                                                                                                                                                                             LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                                                                                                                                                                                                                                                                                                                                                                             OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                                                                                                                                                                                                                                                                                                                                                                                             THE SOFTWARE.
                                                                                                                                                                                                                                                                                                                                                                                            */
  function CmpF32NotEuqal(a, b) {
    const c = a - b;
    return c > 0.000001 || c < -0.000001;
  }
  function GFXFormatToWebGLType(format, gl) {
    switch (format) {
      case Format.R8:
        return gl.UNSIGNED_BYTE;
      case Format.R8SN:
        return gl.BYTE;
      case Format.R8UI:
        return gl.UNSIGNED_BYTE;
      case Format.R8I:
        return gl.BYTE;
      case Format.R16F:
        return gl.HALF_FLOAT;
      case Format.R16UI:
        return gl.UNSIGNED_SHORT;
      case Format.R16I:
        return gl.SHORT;
      case Format.R32F:
        return gl.FLOAT;
      case Format.R32UI:
        return gl.UNSIGNED_INT;
      case Format.R32I:
        return gl.INT;
      case Format.RG8:
        return gl.UNSIGNED_BYTE;
      case Format.RG8SN:
        return gl.BYTE;
      case Format.RG8UI:
        return gl.UNSIGNED_BYTE;
      case Format.RG8I:
        return gl.BYTE;
      case Format.RG16F:
        return gl.HALF_FLOAT;
      case Format.RG16UI:
        return gl.UNSIGNED_SHORT;
      case Format.RG16I:
        return gl.SHORT;
      case Format.RG32F:
        return gl.FLOAT;
      case Format.RG32UI:
        return gl.UNSIGNED_INT;
      case Format.RG32I:
        return gl.INT;
      case Format.RGB8:
        return gl.UNSIGNED_BYTE;
      case Format.SRGB8:
        return gl.UNSIGNED_BYTE;
      case Format.RGB8SN:
        return gl.BYTE;
      case Format.RGB8UI:
        return gl.UNSIGNED_BYTE;
      case Format.RGB8I:
        return gl.BYTE;
      case Format.RGB16F:
        return gl.HALF_FLOAT;
      case Format.RGB16UI:
        return gl.UNSIGNED_SHORT;
      case Format.RGB16I:
        return gl.SHORT;
      case Format.RGB32F:
        return gl.FLOAT;
      case Format.RGB32UI:
        return gl.UNSIGNED_INT;
      case Format.RGB32I:
        return gl.INT;
      case Format.BGRA8:
        return gl.UNSIGNED_BYTE;
      case Format.RGBA8:
        return gl.UNSIGNED_BYTE;
      case Format.SRGB8_A8:
        return gl.UNSIGNED_BYTE;
      case Format.RGBA8SN:
        return gl.BYTE;
      case Format.RGBA8UI:
        return gl.UNSIGNED_BYTE;
      case Format.RGBA8I:
        return gl.BYTE;
      case Format.RGBA16F:
        return gl.HALF_FLOAT;
      case Format.RGBA16UI:
        return gl.UNSIGNED_SHORT;
      case Format.RGBA16I:
        return gl.SHORT;
      case Format.RGBA32F:
        return gl.FLOAT;
      case Format.RGBA32UI:
        return gl.UNSIGNED_INT;
      case Format.RGBA32I:
        return gl.INT;
      case Format.R5G6B5:
        return gl.UNSIGNED_SHORT_5_6_5;
      case Format.R11G11B10F:
        return gl.UNSIGNED_INT_10F_11F_11F_REV;
      case Format.RGB5A1:
        return gl.UNSIGNED_SHORT_5_5_5_1;
      case Format.RGBA4:
        return gl.UNSIGNED_SHORT_4_4_4_4;
      case Format.RGB10A2:
        return gl.UNSIGNED_INT_2_10_10_10_REV;
      case Format.RGB10A2UI:
        return gl.UNSIGNED_INT_2_10_10_10_REV;
      case Format.RGB9E5:
        return gl.FLOAT;
      case Format.DEPTH:
        return gl.FLOAT;
      case Format.DEPTH_STENCIL:
        return gl.UNSIGNED_INT_24_8;
      case Format.BC1:
        return gl.UNSIGNED_BYTE;
      case Format.BC1_SRGB:
        return gl.UNSIGNED_BYTE;
      case Format.BC2:
        return gl.UNSIGNED_BYTE;
      case Format.BC2_SRGB:
        return gl.UNSIGNED_BYTE;
      case Format.BC3:
        return gl.UNSIGNED_BYTE;
      case Format.BC3_SRGB:
        return gl.UNSIGNED_BYTE;
      case Format.BC4:
        return gl.UNSIGNED_BYTE;
      case Format.BC4_SNORM:
        return gl.BYTE;
      case Format.BC5:
        return gl.UNSIGNED_BYTE;
      case Format.BC5_SNORM:
        return gl.BYTE;
      case Format.BC6H_SF16:
        return gl.FLOAT;
      case Format.BC6H_UF16:
        return gl.FLOAT;
      case Format.BC7:
        return gl.UNSIGNED_BYTE;
      case Format.BC7_SRGB:
        return gl.UNSIGNED_BYTE;
      case Format.ETC_RGB8:
        return gl.UNSIGNED_BYTE;
      case Format.ETC2_RGB8:
        return gl.UNSIGNED_BYTE;
      case Format.ETC2_SRGB8:
        return gl.UNSIGNED_BYTE;
      case Format.ETC2_RGB8_A1:
        return gl.UNSIGNED_BYTE;
      case Format.ETC2_SRGB8_A1:
        return gl.UNSIGNED_BYTE;
      case Format.EAC_R11:
        return gl.UNSIGNED_BYTE;
      case Format.EAC_R11SN:
        return gl.BYTE;
      case Format.EAC_RG11:
        return gl.UNSIGNED_BYTE;
      case Format.EAC_RG11SN:
        return gl.BYTE;
      case Format.PVRTC_RGB2:
        return gl.UNSIGNED_BYTE;
      case Format.PVRTC_RGBA2:
        return gl.UNSIGNED_BYTE;
      case Format.PVRTC_RGB4:
        return gl.UNSIGNED_BYTE;
      case Format.PVRTC_RGBA4:
        return gl.UNSIGNED_BYTE;
      case Format.PVRTC2_2BPP:
        return gl.UNSIGNED_BYTE;
      case Format.PVRTC2_4BPP:
        return gl.UNSIGNED_BYTE;
      case Format.ASTC_RGBA_4X4:
      case Format.ASTC_RGBA_5X4:
      case Format.ASTC_RGBA_5X5:
      case Format.ASTC_RGBA_6X5:
      case Format.ASTC_RGBA_6X6:
      case Format.ASTC_RGBA_8X5:
      case Format.ASTC_RGBA_8X6:
      case Format.ASTC_RGBA_8X8:
      case Format.ASTC_RGBA_10X5:
      case Format.ASTC_RGBA_10X6:
      case Format.ASTC_RGBA_10X8:
      case Format.ASTC_RGBA_10X10:
      case Format.ASTC_RGBA_12X10:
      case Format.ASTC_RGBA_12X12:
      case Format.ASTC_SRGBA_4X4:
      case Format.ASTC_SRGBA_5X4:
      case Format.ASTC_SRGBA_5X5:
      case Format.ASTC_SRGBA_6X5:
      case Format.ASTC_SRGBA_6X6:
      case Format.ASTC_SRGBA_8X5:
      case Format.ASTC_SRGBA_8X6:
      case Format.ASTC_SRGBA_8X8:
      case Format.ASTC_SRGBA_10X5:
      case Format.ASTC_SRGBA_10X6:
      case Format.ASTC_SRGBA_10X8:
      case Format.ASTC_SRGBA_10X10:
      case Format.ASTC_SRGBA_12X10:
      case Format.ASTC_SRGBA_12X12:
        return gl.UNSIGNED_BYTE;
      default:
        {
          return gl.UNSIGNED_BYTE;
        }
    }
  }
  function GFXFormatToWebGLInternalFormat(format, gl) {
    switch (format) {
      case Format.A8:
        return gl.ALPHA;
      case Format.L8:
        return gl.LUMINANCE;
      case Format.LA8:
        return gl.LUMINANCE_ALPHA;
      case Format.R8:
        return gl.R8;
      case Format.R8SN:
        return gl.R8_SNORM;
      case Format.R8UI:
        return gl.R8UI;
      case Format.R8I:
        return gl.R8I;
      case Format.RG8:
        return gl.RG8;
      case Format.RG8SN:
        return gl.RG8_SNORM;
      case Format.RG8UI:
        return gl.RG8UI;
      case Format.RG8I:
        return gl.RG8I;
      case Format.RGB8:
        return gl.RGB8;
      case Format.RGB8SN:
        return gl.RGB8_SNORM;
      case Format.RGB8UI:
        return gl.RGB8UI;
      case Format.RGB8I:
        return gl.RGB8I;
      case Format.BGRA8:
        return gl.RGBA8;
      case Format.RGBA8:
        return gl.RGBA8;
      case Format.RGBA8SN:
        return gl.RGBA8_SNORM;
      case Format.RGBA8UI:
        return gl.RGBA8UI;
      case Format.RGBA8I:
        return gl.RGBA8I;
      case Format.R16I:
        return gl.R16I;
      case Format.R16UI:
        return gl.R16UI;
      case Format.R16F:
        return gl.R16F;
      case Format.RG16I:
        return gl.RG16I;
      case Format.RG16UI:
        return gl.RG16UI;
      case Format.RG16F:
        return gl.RG16F;
      case Format.RGB16I:
        return gl.RGB16I;
      case Format.RGB16UI:
        return gl.RGB16UI;
      case Format.RGB16F:
        return gl.RGB16F;
      case Format.RGBA16I:
        return gl.RGBA16I;
      case Format.RGBA16UI:
        return gl.RGBA16UI;
      case Format.RGBA16F:
        return gl.RGBA16F;
      case Format.R32I:
        return gl.R32I;
      case Format.R32UI:
        return gl.R32UI;
      case Format.R32F:
        return gl.R32F;
      case Format.RG32I:
        return gl.RG32I;
      case Format.RG32UI:
        return gl.RG32UI;
      case Format.RG32F:
        return gl.RG32F;
      case Format.RGB32I:
        return gl.RGB32I;
      case Format.RGB32UI:
        return gl.RGB32UI;
      case Format.RGB32F:
        return gl.RGB32F;
      case Format.RGBA32I:
        return gl.RGBA32I;
      case Format.RGBA32UI:
        return gl.RGBA32UI;
      case Format.RGBA32F:
        return gl.RGBA32F;
      case Format.R5G6B5:
        return gl.RGB565;
      case Format.RGB5A1:
        return gl.RGB5_A1;
      case Format.RGBA4:
        return gl.RGBA4;
      case Format.SRGB8:
        return gl.SRGB8;
      case Format.SRGB8_A8:
        return gl.SRGB8_ALPHA8;
      case Format.RGB10A2:
        return gl.RGB10_A2;
      case Format.RGB10A2UI:
        return gl.RGB10_A2UI;
      case Format.R11G11B10F:
        return gl.R11F_G11F_B10F;
      case Format.DEPTH:
        return gl.DEPTH_COMPONENT32F;
      case Format.DEPTH_STENCIL:
        return gl.DEPTH24_STENCIL8;
      case Format.BC1:
        return WebGL2EXT.COMPRESSED_RGB_S3TC_DXT1_EXT;
      case Format.BC1_ALPHA:
        return WebGL2EXT.COMPRESSED_RGBA_S3TC_DXT1_EXT;
      case Format.BC1_SRGB:
        return WebGL2EXT.COMPRESSED_SRGB_S3TC_DXT1_EXT;
      case Format.BC1_SRGB_ALPHA:
        return WebGL2EXT.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
      case Format.BC2:
        return WebGL2EXT.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      case Format.BC2_SRGB:
        return WebGL2EXT.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
      case Format.BC3:
        return WebGL2EXT.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      case Format.BC3_SRGB:
        return WebGL2EXT.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
      case Format.ETC_RGB8:
        return WebGL2EXT.COMPRESSED_RGB_ETC1_WEBGL;
      case Format.ETC2_RGB8:
        return WebGL2EXT.COMPRESSED_RGB8_ETC2;
      case Format.ETC2_SRGB8:
        return WebGL2EXT.COMPRESSED_SRGB8_ETC2;
      case Format.ETC2_RGB8_A1:
        return WebGL2EXT.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2;
      case Format.ETC2_SRGB8_A1:
        return WebGL2EXT.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2;
      case Format.ETC2_RGBA8:
        return WebGL2EXT.COMPRESSED_RGBA8_ETC2_EAC;
      case Format.ETC2_SRGB8_A8:
        return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC;
      case Format.EAC_R11:
        return WebGL2EXT.COMPRESSED_R11_EAC;
      case Format.EAC_R11SN:
        return WebGL2EXT.COMPRESSED_SIGNED_R11_EAC;
      case Format.EAC_RG11:
        return WebGL2EXT.COMPRESSED_RG11_EAC;
      case Format.EAC_RG11SN:
        return WebGL2EXT.COMPRESSED_SIGNED_RG11_EAC;
      case Format.PVRTC_RGB2:
        return WebGL2EXT.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
      case Format.PVRTC_RGBA2:
        return WebGL2EXT.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      case Format.PVRTC_RGB4:
        return WebGL2EXT.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
      case Format.PVRTC_RGBA4:
        return WebGL2EXT.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
      case Format.ASTC_RGBA_4X4:
        return WebGL2EXT.COMPRESSED_RGBA_ASTC_4x4_KHR;
      case Format.ASTC_RGBA_5X4:
        return WebGL2EXT.COMPRESSED_RGBA_ASTC_5x4_KHR;
      case Format.ASTC_RGBA_5X5:
        return WebGL2EXT.COMPRESSED_RGBA_ASTC_5x5_KHR;
      case Format.ASTC_RGBA_6X5:
        return WebGL2EXT.COMPRESSED_RGBA_ASTC_6x5_KHR;
      case Format.ASTC_RGBA_6X6:
        return WebGL2EXT.COMPRESSED_RGBA_ASTC_6x6_KHR;
      case Format.ASTC_RGBA_8X5:
        return WebGL2EXT.COMPRESSED_RGBA_ASTC_8x5_KHR;
      case Format.ASTC_RGBA_8X6:
        return WebGL2EXT.COMPRESSED_RGBA_ASTC_8x6_KHR;
      case Format.ASTC_RGBA_8X8:
        return WebGL2EXT.COMPRESSED_RGBA_ASTC_8x8_KHR;
      case Format.ASTC_RGBA_10X5:
        return WebGL2EXT.COMPRESSED_RGBA_ASTC_10x5_KHR;
      case Format.ASTC_RGBA_10X6:
        return WebGL2EXT.COMPRESSED_RGBA_ASTC_10x6_KHR;
      case Format.ASTC_RGBA_10X8:
        return WebGL2EXT.COMPRESSED_RGBA_ASTC_10x8_KHR;
      case Format.ASTC_RGBA_10X10:
        return WebGL2EXT.COMPRESSED_RGBA_ASTC_10x10_KHR;
      case Format.ASTC_RGBA_12X10:
        return WebGL2EXT.COMPRESSED_RGBA_ASTC_12x10_KHR;
      case Format.ASTC_RGBA_12X12:
        return WebGL2EXT.COMPRESSED_RGBA_ASTC_12x12_KHR;
      case Format.ASTC_SRGBA_4X4:
        return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
      case Format.ASTC_SRGBA_5X4:
        return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
      case Format.ASTC_SRGBA_5X5:
        return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
      case Format.ASTC_SRGBA_6X5:
        return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
      case Format.ASTC_SRGBA_6X6:
        return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
      case Format.ASTC_SRGBA_8X5:
        return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
      case Format.ASTC_SRGBA_8X6:
        return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
      case Format.ASTC_SRGBA_8X8:
        return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
      case Format.ASTC_SRGBA_10X5:
        return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
      case Format.ASTC_SRGBA_10X6:
        return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
      case Format.ASTC_SRGBA_10X8:
        return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
      case Format.ASTC_SRGBA_10X10:
        return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
      case Format.ASTC_SRGBA_12X10:
        return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
      case Format.ASTC_SRGBA_12X12:
        return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
      default:
        {
          error('Unsupported Format, convert to WebGL internal format failed.');
          return gl.RGBA;
        }
    }
  }
  function GFXFormatToWebGLFormat(format, gl) {
    switch (format) {
      case Format.A8:
        return gl.ALPHA;
      case Format.L8:
        return gl.LUMINANCE;
      case Format.LA8:
        return gl.LUMINANCE_ALPHA;
      case Format.R8:
      case Format.R8SN:
        return gl.RED;
      case Format.R8UI:
      case Format.R8I:
        return gl.RED;
      case Format.RG8:
      case Format.RG8SN:
      case Format.RG8UI:
      case Format.RG8I:
        return gl.RG;
      case Format.RGB8:
      case Format.RGB8SN:
      case Format.RGB8UI:
      case Format.RGB8I:
        return gl.RGB;
      case Format.BGRA8:
      case Format.RGBA8:
      case Format.RGBA8SN:
      case Format.RGBA8UI:
      case Format.RGBA8I:
        return gl.RGBA;
      case Format.R16UI:
      case Format.R16I:
      case Format.R16F:
        return gl.RED;
      case Format.RG16UI:
      case Format.RG16I:
      case Format.RG16F:
        return gl.RG;
      case Format.RGB16UI:
      case Format.RGB16I:
      case Format.RGB16F:
        return gl.RGB;
      case Format.RGBA16UI:
      case Format.RGBA16I:
      case Format.RGBA16F:
        return gl.RGBA;
      case Format.R32UI:
      case Format.R32I:
      case Format.R32F:
        return gl.RED;
      case Format.RG32UI:
      case Format.RG32I:
      case Format.RG32F:
        return gl.RG;
      case Format.RGB32UI:
      case Format.RGB32I:
      case Format.RGB32F:
        return gl.RGB;
      case Format.RGBA32UI:
      case Format.RGBA32I:
      case Format.RGBA32F:
        return gl.RGBA;
      case Format.RGB10A2:
        return gl.RGBA;
      case Format.R11G11B10F:
        return gl.RGB;
      case Format.R5G6B5:
        return gl.RGB;
      case Format.RGB5A1:
        return gl.RGBA;
      case Format.RGBA4:
        return gl.RGBA;
      case Format.SRGB8:
        return gl.RGB;
      case Format.SRGB8_A8:
        return gl.RGBA;
      case Format.DEPTH:
        return gl.DEPTH_COMPONENT;
      case Format.DEPTH_STENCIL:
        return gl.DEPTH_STENCIL;
      case Format.BC1:
        return WebGL2EXT.COMPRESSED_RGB_S3TC_DXT1_EXT;
      case Format.BC1_ALPHA:
        return WebGL2EXT.COMPRESSED_RGBA_S3TC_DXT1_EXT;
      case Format.BC1_SRGB:
        return WebGL2EXT.COMPRESSED_SRGB_S3TC_DXT1_EXT;
      case Format.BC1_SRGB_ALPHA:
        return WebGL2EXT.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
      case Format.BC2:
        return WebGL2EXT.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      case Format.BC2_SRGB:
        return WebGL2EXT.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
      case Format.BC3:
        return WebGL2EXT.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      case Format.BC3_SRGB:
        return WebGL2EXT.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
      case Format.ETC_RGB8:
        return WebGL2EXT.COMPRESSED_RGB_ETC1_WEBGL;
      case Format.ETC2_RGB8:
        return WebGL2EXT.COMPRESSED_RGB8_ETC2;
      case Format.ETC2_SRGB8:
        return WebGL2EXT.COMPRESSED_SRGB8_ETC2;
      case Format.ETC2_RGB8_A1:
        return WebGL2EXT.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2;
      case Format.ETC2_SRGB8_A1:
        return WebGL2EXT.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2;
      case Format.ETC2_RGBA8:
        return WebGL2EXT.COMPRESSED_RGBA8_ETC2_EAC;
      case Format.ETC2_SRGB8_A8:
        return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC;
      case Format.EAC_R11:
        return WebGL2EXT.COMPRESSED_R11_EAC;
      case Format.EAC_R11SN:
        return WebGL2EXT.COMPRESSED_SIGNED_R11_EAC;
      case Format.EAC_RG11:
        return WebGL2EXT.COMPRESSED_RG11_EAC;
      case Format.EAC_RG11SN:
        return WebGL2EXT.COMPRESSED_SIGNED_RG11_EAC;
      case Format.PVRTC_RGB2:
        return WebGL2EXT.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
      case Format.PVRTC_RGBA2:
        return WebGL2EXT.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      case Format.PVRTC_RGB4:
        return WebGL2EXT.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
      case Format.PVRTC_RGBA4:
        return WebGL2EXT.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
      case Format.ASTC_RGBA_4X4:
        return WebGL2EXT.COMPRESSED_RGBA_ASTC_4x4_KHR;
      case Format.ASTC_RGBA_5X4:
        return WebGL2EXT.COMPRESSED_RGBA_ASTC_5x4_KHR;
      case Format.ASTC_RGBA_5X5:
        return WebGL2EXT.COMPRESSED_RGBA_ASTC_5x5_KHR;
      case Format.ASTC_RGBA_6X5:
        return WebGL2EXT.COMPRESSED_RGBA_ASTC_6x5_KHR;
      case Format.ASTC_RGBA_6X6:
        return WebGL2EXT.COMPRESSED_RGBA_ASTC_6x6_KHR;
      case Format.ASTC_RGBA_8X5:
        return WebGL2EXT.COMPRESSED_RGBA_ASTC_8x5_KHR;
      case Format.ASTC_RGBA_8X6:
        return WebGL2EXT.COMPRESSED_RGBA_ASTC_8x6_KHR;
      case Format.ASTC_RGBA_8X8:
        return WebGL2EXT.COMPRESSED_RGBA_ASTC_8x8_KHR;
      case Format.ASTC_RGBA_10X5:
        return WebGL2EXT.COMPRESSED_RGBA_ASTC_10x5_KHR;
      case Format.ASTC_RGBA_10X6:
        return WebGL2EXT.COMPRESSED_RGBA_ASTC_10x6_KHR;
      case Format.ASTC_RGBA_10X8:
        return WebGL2EXT.COMPRESSED_RGBA_ASTC_10x8_KHR;
      case Format.ASTC_RGBA_10X10:
        return WebGL2EXT.COMPRESSED_RGBA_ASTC_10x10_KHR;
      case Format.ASTC_RGBA_12X10:
        return WebGL2EXT.COMPRESSED_RGBA_ASTC_12x10_KHR;
      case Format.ASTC_RGBA_12X12:
        return WebGL2EXT.COMPRESSED_RGBA_ASTC_12x12_KHR;
      case Format.ASTC_SRGBA_4X4:
        return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
      case Format.ASTC_SRGBA_5X4:
        return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
      case Format.ASTC_SRGBA_5X5:
        return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
      case Format.ASTC_SRGBA_6X5:
        return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
      case Format.ASTC_SRGBA_6X6:
        return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
      case Format.ASTC_SRGBA_8X5:
        return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
      case Format.ASTC_SRGBA_8X6:
        return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
      case Format.ASTC_SRGBA_8X8:
        return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
      case Format.ASTC_SRGBA_10X5:
        return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
      case Format.ASTC_SRGBA_10X6:
        return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
      case Format.ASTC_SRGBA_10X8:
        return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
      case Format.ASTC_SRGBA_10X10:
        return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
      case Format.ASTC_SRGBA_12X10:
        return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
      case Format.ASTC_SRGBA_12X12:
        return WebGL2EXT.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
      default:
        {
          error('Unsupported Format, convert to WebGL format failed.');
          return gl.RGBA;
        }
    }
  }
  function GFXTypeToWebGLType(type, gl) {
    switch (type) {
      case Type.BOOL:
        return gl.BOOL;
      case Type.BOOL2:
        return gl.BOOL_VEC2;
      case Type.BOOL3:
        return gl.BOOL_VEC3;
      case Type.BOOL4:
        return gl.BOOL_VEC4;
      case Type.INT:
        return gl.INT;
      case Type.INT2:
        return gl.INT_VEC2;
      case Type.INT3:
        return gl.INT_VEC3;
      case Type.INT4:
        return gl.INT_VEC4;
      case Type.UINT:
        return gl.UNSIGNED_INT;
      case Type.FLOAT:
        return gl.FLOAT;
      case Type.FLOAT2:
        return gl.FLOAT_VEC2;
      case Type.FLOAT3:
        return gl.FLOAT_VEC3;
      case Type.FLOAT4:
        return gl.FLOAT_VEC4;
      case Type.MAT2:
        return gl.FLOAT_MAT2;
      case Type.MAT2X3:
        return gl.FLOAT_MAT2x3;
      case Type.MAT2X4:
        return gl.FLOAT_MAT2x4;
      case Type.MAT3X2:
        return gl.FLOAT_MAT3x2;
      case Type.MAT3:
        return gl.FLOAT_MAT3;
      case Type.MAT3X4:
        return gl.FLOAT_MAT3x4;
      case Type.MAT4X2:
        return gl.FLOAT_MAT4x2;
      case Type.MAT4X3:
        return gl.FLOAT_MAT4x3;
      case Type.MAT4:
        return gl.FLOAT_MAT4;
      case Type.SAMPLER2D:
        return gl.SAMPLER_2D;
      case Type.SAMPLER2D_ARRAY:
        return gl.SAMPLER_2D_ARRAY;
      case Type.SAMPLER3D:
        return gl.SAMPLER_3D;
      case Type.SAMPLER_CUBE:
        return gl.SAMPLER_CUBE;
      default:
        {
          error('Unsupported GLType, convert to GL type failed.');
          return Type.UNKNOWN;
        }
    }
  }
  function WebGLTypeToGFXType(glType, gl) {
    switch (glType) {
      case gl.BOOL:
        return Type.BOOL;
      case gl.BOOL_VEC2:
        return Type.BOOL2;
      case gl.BOOL_VEC3:
        return Type.BOOL3;
      case gl.BOOL_VEC4:
        return Type.BOOL4;
      case gl.INT:
        return Type.INT;
      case gl.INT_VEC2:
        return Type.INT2;
      case gl.INT_VEC3:
        return Type.INT3;
      case gl.INT_VEC4:
        return Type.INT4;
      case gl.UNSIGNED_INT:
        return Type.UINT;
      case gl.UNSIGNED_INT_VEC2:
        return Type.UINT2;
      case gl.UNSIGNED_INT_VEC3:
        return Type.UINT3;
      case gl.UNSIGNED_INT_VEC4:
        return Type.UINT4;
      case gl.FLOAT:
        return Type.FLOAT;
      case gl.FLOAT_VEC2:
        return Type.FLOAT2;
      case gl.FLOAT_VEC3:
        return Type.FLOAT3;
      case gl.FLOAT_VEC4:
        return Type.FLOAT4;
      case gl.FLOAT_MAT2:
        return Type.MAT2;
      case gl.FLOAT_MAT2x3:
        return Type.MAT2X3;
      case gl.FLOAT_MAT2x4:
        return Type.MAT2X4;
      case gl.FLOAT_MAT3x2:
        return Type.MAT3X2;
      case gl.FLOAT_MAT3:
        return Type.MAT3;
      case gl.FLOAT_MAT3x4:
        return Type.MAT3X4;
      case gl.FLOAT_MAT4x2:
        return Type.MAT4X2;
      case gl.FLOAT_MAT4x3:
        return Type.MAT4X3;
      case gl.FLOAT_MAT4:
        return Type.MAT4;
      case gl.SAMPLER_2D:
        return Type.SAMPLER2D;
      case gl.SAMPLER_2D_ARRAY:
        return Type.SAMPLER2D_ARRAY;
      case gl.SAMPLER_3D:
        return Type.SAMPLER3D;
      case gl.SAMPLER_CUBE:
        return Type.SAMPLER_CUBE;
      default:
        {
          error('Unsupported GLType, convert to Type failed.');
          return Type.UNKNOWN;
        }
    }
  }
  function WebGLGetTypeSize(glType, gl) {
    switch (glType) {
      case gl.BOOL:
        return 4;
      case gl.BOOL_VEC2:
        return 8;
      case gl.BOOL_VEC3:
        return 12;
      case gl.BOOL_VEC4:
        return 16;
      case gl.INT:
        return 4;
      case gl.INT_VEC2:
        return 8;
      case gl.INT_VEC3:
        return 12;
      case gl.INT_VEC4:
        return 16;
      case gl.UNSIGNED_INT:
        return 4;
      case gl.UNSIGNED_INT_VEC2:
        return 8;
      case gl.UNSIGNED_INT_VEC3:
        return 12;
      case gl.UNSIGNED_INT_VEC4:
        return 16;
      case gl.FLOAT:
        return 4;
      case gl.FLOAT_VEC2:
        return 8;
      case gl.FLOAT_VEC3:
        return 12;
      case gl.FLOAT_VEC4:
        return 16;
      case gl.FLOAT_MAT2:
        return 16;
      case gl.FLOAT_MAT2x3:
        return 24;
      case gl.FLOAT_MAT2x4:
        return 32;
      case gl.FLOAT_MAT3x2:
        return 24;
      case gl.FLOAT_MAT3:
        return 36;
      case gl.FLOAT_MAT3x4:
        return 48;
      case gl.FLOAT_MAT4x2:
        return 32;
      case gl.FLOAT_MAT4x3:
        return 48;
      case gl.FLOAT_MAT4:
        return 64;
      case gl.SAMPLER_2D:
        return 4;
      case gl.SAMPLER_2D_ARRAY:
        return 4;
      case gl.SAMPLER_2D_ARRAY_SHADOW:
        return 4;
      case gl.SAMPLER_3D:
        return 4;
      case gl.SAMPLER_CUBE:
        return 4;
      case gl.INT_SAMPLER_2D:
        return 4;
      case gl.INT_SAMPLER_2D_ARRAY:
        return 4;
      case gl.INT_SAMPLER_3D:
        return 4;
      case gl.INT_SAMPLER_CUBE:
        return 4;
      case gl.UNSIGNED_INT_SAMPLER_2D:
        return 4;
      case gl.UNSIGNED_INT_SAMPLER_2D_ARRAY:
        return 4;
      case gl.UNSIGNED_INT_SAMPLER_3D:
        return 4;
      case gl.UNSIGNED_INT_SAMPLER_CUBE:
        return 4;
      default:
        {
          error('Unsupported GLType, get type failed.');
          return 0;
        }
    }
  }
  function WebGLGetComponentCount(glType, gl) {
    switch (glType) {
      case gl.FLOAT_MAT2:
        return 2;
      case gl.FLOAT_MAT2x3:
        return 2;
      case gl.FLOAT_MAT2x4:
        return 2;
      case gl.FLOAT_MAT3x2:
        return 3;
      case gl.FLOAT_MAT3:
        return 3;
      case gl.FLOAT_MAT3x4:
        return 3;
      case gl.FLOAT_MAT4x2:
        return 4;
      case gl.FLOAT_MAT4x3:
        return 4;
      case gl.FLOAT_MAT4:
        return 4;
      default:
        {
          return 1;
        }
    }
  }
  function WebGL2CmdFuncCreateBuffer(device, gpuBuffer) {
    const {
      gl
    } = device;
    const cache = device.stateCache;
    const glUsage = gpuBuffer.memUsage & MemoryUsageBit.HOST ? gl.DYNAMIC_DRAW : gl.STATIC_DRAW;
    if (gpuBuffer.usage & BufferUsageBit.VERTEX) {
      gpuBuffer.glTarget = gl.ARRAY_BUFFER;
      const glBuffer = gl.createBuffer();
      if (glBuffer) {
        gpuBuffer.glBuffer = glBuffer;
        if (gpuBuffer.size > 0) {
          if (device.extensions.useVAO) {
            if (cache.glVAO) {
              gl.bindVertexArray(null);
              cache.glVAO = null;
            }
          }
          gfxStateCache.gpuInputAssembler = null;
          if (device.stateCache.glArrayBuffer !== gpuBuffer.glBuffer) {
            gl.bindBuffer(gl.ARRAY_BUFFER, gpuBuffer.glBuffer);
            device.stateCache.glArrayBuffer = gpuBuffer.glBuffer;
          }
          gl.bufferData(gl.ARRAY_BUFFER, gpuBuffer.size, glUsage);
          gl.bindBuffer(gl.ARRAY_BUFFER, null);
          device.stateCache.glArrayBuffer = null;
        }
      }
    } else if (gpuBuffer.usage & BufferUsageBit.INDEX) {
      gpuBuffer.glTarget = gl.ELEMENT_ARRAY_BUFFER;
      const glBuffer = gl.createBuffer();
      if (glBuffer) {
        gpuBuffer.glBuffer = glBuffer;
        if (gpuBuffer.size > 0) {
          if (device.extensions.useVAO) {
            if (cache.glVAO) {
              gl.bindVertexArray(null);
              cache.glVAO = null;
            }
          }
          gfxStateCache.gpuInputAssembler = null;
          if (device.stateCache.glElementArrayBuffer !== gpuBuffer.glBuffer) {
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gpuBuffer.glBuffer);
            device.stateCache.glElementArrayBuffer = gpuBuffer.glBuffer;
          }
          gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, gpuBuffer.size, glUsage);
          gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
          device.stateCache.glElementArrayBuffer = null;
        }
      }
    } else if (gpuBuffer.usage & BufferUsageBit.UNIFORM) {
      gpuBuffer.glTarget = gl.UNIFORM_BUFFER;
      const glBuffer = gl.createBuffer();
      if (glBuffer && gpuBuffer.size > 0) {
        gpuBuffer.glBuffer = glBuffer;
        if (device.stateCache.glUniformBuffer !== gpuBuffer.glBuffer) {
          gl.bindBuffer(gl.UNIFORM_BUFFER, gpuBuffer.glBuffer);
          device.stateCache.glUniformBuffer = gpuBuffer.glBuffer;
        }
        gl.bufferData(gl.UNIFORM_BUFFER, gpuBuffer.size, glUsage);
        gl.bindBuffer(gl.UNIFORM_BUFFER, null);
        device.stateCache.glUniformBuffer = null;
      }
    } else if (gpuBuffer.usage & BufferUsageBit.INDIRECT) {
      gpuBuffer.glTarget = gl.NONE;
    } else if (gpuBuffer.usage & BufferUsageBit.TRANSFER_DST) {
      gpuBuffer.glTarget = gl.NONE;
    } else if (gpuBuffer.usage & BufferUsageBit.TRANSFER_SRC) {
      gpuBuffer.glTarget = gl.NONE;
    } else {
      error('Unsupported BufferType, create buffer failed.');
      gpuBuffer.glTarget = gl.NONE;
    }
  }
  function WebGL2CmdFuncDestroyBuffer(device, gpuBuffer) {
    const {
      gl
    } = device;
    const cache = device.stateCache;
    if (gpuBuffer.glBuffer) {
      // Firefox 75+ implicitly unbind whatever buffer there was on the slot sometimes
      // can be reproduced in the static batching scene at https://github.com/cocos-creator/test-cases-3d
      switch (gpuBuffer.glTarget) {
        case gl.ARRAY_BUFFER:
          if (device.extensions.useVAO) {
            if (cache.glVAO) {
              gl.bindVertexArray(null);
              device.stateCache.glVAO = null;
            }
          }
          gfxStateCache.gpuInputAssembler = null;
          gl.bindBuffer(gl.ARRAY_BUFFER, null);
          device.stateCache.glArrayBuffer = null;
          break;
        case gl.ELEMENT_ARRAY_BUFFER:
          if (device.extensions.useVAO) {
            if (cache.glVAO) {
              gl.bindVertexArray(null);
              device.stateCache.glVAO = null;
            }
          }
          gfxStateCache.gpuInputAssembler = null;
          gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
          device.stateCache.glElementArrayBuffer = null;
          break;
        case gl.UNIFORM_BUFFER:
          gl.bindBuffer(gl.UNIFORM_BUFFER, null);
          device.stateCache.glUniformBuffer = null;
          break;
        default:
      }
      gl.deleteBuffer(gpuBuffer.glBuffer);
      gpuBuffer.glBuffer = null;
    }
  }
  function WebGL2CmdFuncResizeBuffer(device, gpuBuffer) {
    const {
      gl
    } = device;
    const cache = device.stateCache;
    const glUsage = gpuBuffer.memUsage & MemoryUsageBit.HOST ? gl.DYNAMIC_DRAW : gl.STATIC_DRAW;
    if (gpuBuffer.usage & BufferUsageBit.VERTEX) {
      if (device.extensions.useVAO) {
        if (cache.glVAO) {
          gl.bindVertexArray(null);
          cache.glVAO = null;
        }
      }
      gfxStateCache.gpuInputAssembler = null;
      if (cache.glArrayBuffer !== gpuBuffer.glBuffer) {
        gl.bindBuffer(gl.ARRAY_BUFFER, gpuBuffer.glBuffer);
      }
      if (gpuBuffer.buffer) {
        gl.bufferData(gl.ARRAY_BUFFER, gpuBuffer.buffer, glUsage);
      } else {
        gl.bufferData(gl.ARRAY_BUFFER, gpuBuffer.size, glUsage);
      }
      gl.bindBuffer(gl.ARRAY_BUFFER, null);
      cache.glArrayBuffer = null;
    } else if (gpuBuffer.usage & BufferUsageBit.INDEX) {
      if (device.extensions.useVAO) {
        if (cache.glVAO) {
          gl.bindVertexArray(null);
          cache.glVAO = null;
        }
      }
      gfxStateCache.gpuInputAssembler = null;
      if (device.stateCache.glElementArrayBuffer !== gpuBuffer.glBuffer) {
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gpuBuffer.glBuffer);
      }
      if (gpuBuffer.buffer) {
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, gpuBuffer.buffer, glUsage);
      } else {
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, gpuBuffer.size, glUsage);
      }
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
      device.stateCache.glElementArrayBuffer = null;
    } else if (gpuBuffer.usage & BufferUsageBit.UNIFORM) {
      if (device.stateCache.glUniformBuffer !== gpuBuffer.glBuffer) {
        gl.bindBuffer(gl.UNIFORM_BUFFER, gpuBuffer.glBuffer);
      }
      gl.bufferData(gl.UNIFORM_BUFFER, gpuBuffer.size, glUsage);
      gl.bindBuffer(gl.UNIFORM_BUFFER, null);
      device.stateCache.glUniformBuffer = null;
    } else if (gpuBuffer.usage & BufferUsageBit.INDIRECT || gpuBuffer.usage & BufferUsageBit.TRANSFER_DST || gpuBuffer.usage & BufferUsageBit.TRANSFER_SRC) {
      gpuBuffer.glTarget = gl.NONE;
    } else {
      error('Unsupported BufferType, create buffer failed.');
      gpuBuffer.glTarget = gl.NONE;
    }
  }
  function WebGL2CmdFuncUpdateBuffer(device, gpuBuffer, buffer, offset, size) {
    if (gpuBuffer.usage & BufferUsageBit.INDIRECT) {
      gpuBuffer.indirects.clearDraws();
      const drawInfos = buffer.drawInfos;
      for (let i = 0; i < drawInfos.length; ++i) {
        gpuBuffer.indirects.setDrawInfo(offset + i, drawInfos[i]);
      }
    } else {
      const buff = buffer;
      const {
        gl
      } = device;
      const cache = device.stateCache;
      switch (gpuBuffer.glTarget) {
        case gl.ARRAY_BUFFER:
          {
            if (device.extensions.useVAO) {
              if (cache.glVAO) {
                gl.bindVertexArray(null);
                cache.glVAO = null;
              }
            }
            gfxStateCache.gpuInputAssembler = null;
            if (cache.glArrayBuffer !== gpuBuffer.glBuffer) {
              gl.bindBuffer(gl.ARRAY_BUFFER, gpuBuffer.glBuffer);
              cache.glArrayBuffer = gpuBuffer.glBuffer;
            }
            if (size === buff.byteLength) {
              gl.bufferSubData(gpuBuffer.glTarget, offset, buff);
            } else {
              gl.bufferSubData(gpuBuffer.glTarget, offset, buff.slice(0, size));
            }
            break;
          }
        case gl.ELEMENT_ARRAY_BUFFER:
          {
            if (device.extensions.useVAO) {
              if (cache.glVAO) {
                gl.bindVertexArray(null);
                cache.glVAO = null;
              }
            }
            gfxStateCache.gpuInputAssembler = null;
            if (cache.glElementArrayBuffer !== gpuBuffer.glBuffer) {
              gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gpuBuffer.glBuffer);
              cache.glElementArrayBuffer = gpuBuffer.glBuffer;
            }
            if (size === buff.byteLength) {
              gl.bufferSubData(gpuBuffer.glTarget, offset, buff);
            } else {
              gl.bufferSubData(gpuBuffer.glTarget, offset, buff.slice(0, size));
            }
            break;
          }
        case gl.UNIFORM_BUFFER:
          {
            if (cache.glUniformBuffer !== gpuBuffer.glBuffer) {
              gl.bindBuffer(gl.UNIFORM_BUFFER, gpuBuffer.glBuffer);
              cache.glUniformBuffer = gpuBuffer.glBuffer;
            }
            if (size === buff.byteLength) {
              gl.bufferSubData(gpuBuffer.glTarget, offset, buff);
            } else {
              gl.bufferSubData(gpuBuffer.glTarget, offset, new Float32Array(buff, 0, size / 4));
            }
            break;
          }
        default:
          {
            error('Unsupported BufferType, update buffer failed.');
          }
      }
    }
  }
  function WebGL2CmdFuncCreateTexture(device, gpuTexture) {
    const {
      gl
    } = device;
    gpuTexture.glInternalFmt = GFXFormatToWebGLInternalFormat(gpuTexture.format, gl);
    gpuTexture.glFormat = GFXFormatToWebGLFormat(gpuTexture.format, gl);
    gpuTexture.glType = GFXFormatToWebGLType(gpuTexture.format, gl);
    let w = gpuTexture.width;
    let h = gpuTexture.height;
    const d = gpuTexture.depth;
    const l = gpuTexture.arrayLayer;
    switch (gpuTexture.type) {
      case TextureType.TEX2D:
        {
          gpuTexture.glTarget = gl.TEXTURE_2D;
          const maxSize = Math.max(w, h);
          if (maxSize > device.capabilities.maxTextureSize) {
            errorID(9100, maxSize, device.capabilities.maxTextureSize);
          }
          if (gpuTexture.samples === SampleCount.X1) {
            gpuTexture.glTexture = gl.createTexture();
            if (gpuTexture.size > 0) {
              const glTexUnit = device.stateCache.glTexUnits[device.stateCache.texUnit];
              if (glTexUnit.glTexture !== gpuTexture.glTexture) {
                gl.bindTexture(gl.TEXTURE_2D, gpuTexture.glTexture);
                glTexUnit.glTexture = gpuTexture.glTexture;
              }
              if (FormatInfos[gpuTexture.format].isCompressed) {
                for (let i = 0; i < gpuTexture.mipLevel; ++i) {
                  const imgSize = FormatSize(gpuTexture.format, w, h, 1);
                  const view = new Uint8Array(imgSize);
                  gl.compressedTexImage2D(gl.TEXTURE_2D, i, gpuTexture.glInternalFmt, w, h, 0, view);
                  w = Math.max(1, w >> 1);
                  h = Math.max(1, h >> 1);
                }
              } else if (gpuTexture.flags & TextureFlagBit.MUTABLE_STORAGE) {
                gl.texImage2D(gl.TEXTURE_2D, 0, gpuTexture.glInternalFmt, w, h, 0, gpuTexture.glFormat, gpuTexture.glType, null);
              } else {
                gl.texStorage2D(gl.TEXTURE_2D, gpuTexture.mipLevel, gpuTexture.glInternalFmt, w, h);
              }
            }
          } else {
            gpuTexture.glRenderbuffer = gl.createRenderbuffer();
            if (gpuTexture.size > 0) {
              if (device.stateCache.glRenderbuffer !== gpuTexture.glRenderbuffer) {
                gl.bindRenderbuffer(gl.RENDERBUFFER, gpuTexture.glRenderbuffer);
                device.stateCache.glRenderbuffer = gpuTexture.glRenderbuffer;
              }
              gl.renderbufferStorageMultisample(gl.RENDERBUFFER, gpuTexture.samples, gpuTexture.glInternalFmt, gpuTexture.width, gpuTexture.height);
            }
          }
          break;
        }
      case TextureType.TEX2D_ARRAY:
        {
          gpuTexture.glTarget = gl.TEXTURE_2D_ARRAY;
          const maxSize = Math.max(w, h);
          if (maxSize > device.capabilities.maxTextureSize) {
            errorID(9100, maxSize, device.capabilities.maxTextureSize);
          }
          if (l > device.capabilities.maxArrayTextureLayers) {
            errorID(9100, l, device.capabilities.maxArrayTextureLayers);
          }
          gpuTexture.glTexture = gl.createTexture();
          if (gpuTexture.size > 0) {
            const glTexUnit = device.stateCache.glTexUnits[device.stateCache.texUnit];
            if (glTexUnit.glTexture !== gpuTexture.glTexture) {
              gl.bindTexture(gl.TEXTURE_2D_ARRAY, gpuTexture.glTexture);
              glTexUnit.glTexture = gpuTexture.glTexture;
            }
            if (FormatInfos[gpuTexture.format].isCompressed) {
              for (let i = 0; i < gpuTexture.mipLevel; ++i) {
                const imgSize = FormatSize(gpuTexture.format, w, h, l);
                const view = new Uint8Array(imgSize);
                gl.compressedTexImage3D(gl.TEXTURE_2D_ARRAY, i, gpuTexture.glInternalFmt, w, h, l, 0, view);
                w = Math.max(1, w >> 1);
                h = Math.max(1, h >> 1);
              }
            } else {
              gl.texStorage3D(gl.TEXTURE_2D_ARRAY, gpuTexture.mipLevel, gpuTexture.glInternalFmt, w, h, l);
            }
          }
          break;
        }
      case TextureType.TEX3D:
        {
          gpuTexture.glTarget = gl.TEXTURE_3D;
          const maxSize = Math.max(Math.max(w, h), d);
          if (maxSize > device.capabilities.max3DTextureSize) {
            errorID(9100, maxSize, device.capabilities.max3DTextureSize);
          }
          gpuTexture.glTexture = gl.createTexture();
          if (gpuTexture.size > 0) {
            const glTexUnit = device.stateCache.glTexUnits[device.stateCache.texUnit];
            if (glTexUnit.glTexture !== gpuTexture.glTexture) {
              gl.bindTexture(gl.TEXTURE_3D, gpuTexture.glTexture);
              glTexUnit.glTexture = gpuTexture.glTexture;
            }
            if (FormatInfos[gpuTexture.format].isCompressed) {
              for (let i = 0; i < gpuTexture.mipLevel; ++i) {
                const imgSize = FormatSize(gpuTexture.format, w, h, d);
                const view = new Uint8Array(imgSize);
                gl.compressedTexImage3D(gl.TEXTURE_3D, i, gpuTexture.glInternalFmt, w, h, d, 0, view);
                w = Math.max(1, w >> 1);
                h = Math.max(1, h >> 1);
              }
            } else {
              gl.texStorage3D(gl.TEXTURE_3D, gpuTexture.mipLevel, gpuTexture.glInternalFmt, w, h, d);
            }
          }
          break;
        }
      case TextureType.CUBE:
        {
          gpuTexture.glTarget = gl.TEXTURE_CUBE_MAP;
          const maxSize = Math.max(w, h);
          if (maxSize > device.capabilities.maxCubeMapTextureSize) {
            errorID(9100, maxSize, device.capabilities.maxTextureSize);
          }
          gpuTexture.glTexture = gl.createTexture();
          if (gpuTexture.size > 0) {
            const glTexUnit = device.stateCache.glTexUnits[device.stateCache.texUnit];
            if (glTexUnit.glTexture !== gpuTexture.glTexture) {
              gl.bindTexture(gl.TEXTURE_CUBE_MAP, gpuTexture.glTexture);
              glTexUnit.glTexture = gpuTexture.glTexture;
            }
            if (FormatInfos[gpuTexture.format].isCompressed) {
              for (let i = 0; i < gpuTexture.mipLevel; ++i) {
                const imgSize = FormatSize(gpuTexture.format, w, h, 1);
                const view = new Uint8Array(imgSize);
                for (let f = 0; f < 6; ++f) {
                  gl.compressedTexImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + f, i, gpuTexture.glInternalFmt, w, h, 0, view);
                }
                w = Math.max(1, w >> 1);
                h = Math.max(1, h >> 1);
              }
            } else {
              gl.texStorage2D(gl.TEXTURE_CUBE_MAP, gpuTexture.mipLevel, gpuTexture.glInternalFmt, w, h);
            }
          }
          break;
        }
      default:
        {
          error('Unsupported TextureType, create texture failed.');
          gpuTexture.type = TextureType.TEX2D;
          gpuTexture.glTarget = gl.TEXTURE_2D;
        }
    }
  }
  function WebGL2CmdFuncDestroyTexture(device, gpuTexture) {
    const {
      gl
    } = device;
    if (gpuTexture.glTexture) {
      const glTexUnits = device.stateCache.glTexUnits;
      let texUnit = device.stateCache.texUnit;
      gl.deleteTexture(gpuTexture.glTexture);
      for (let i = 0; i < glTexUnits.length; ++i) {
        if (glTexUnits[i].glTexture === gpuTexture.glTexture) {
          gl.activeTexture(gl.TEXTURE0 + i);
          texUnit = i;
          gl.bindTexture(gpuTexture.glTarget, null);
          glTexUnits[i].glTexture = null;
        }
      }
      device.stateCache.texUnit = texUnit;
      gpuTexture.glTexture = null;
    }
    if (gpuTexture.glRenderbuffer) {
      let glRenderbuffer = device.stateCache.glRenderbuffer;
      gl.deleteRenderbuffer(gpuTexture.glRenderbuffer);
      if (glRenderbuffer === gpuTexture.glRenderbuffer) {
        gl.bindRenderbuffer(gl.RENDERBUFFER, null);
        glRenderbuffer = null;
      }
      gpuTexture.glRenderbuffer = null;
    }
  }
  function WebGL2CmdFuncResizeTexture(device, gpuTexture) {
    if (!gpuTexture.size) return;
    const {
      gl
    } = device;
    let w = gpuTexture.width;
    let h = gpuTexture.height;
    const d = gpuTexture.depth;
    const l = gpuTexture.arrayLayer;
    switch (gpuTexture.type) {
      case TextureType.TEX2D:
        {
          gpuTexture.glTarget = gl.TEXTURE_2D;
          const maxSize = Math.max(w, h);
          if (maxSize > device.capabilities.maxTextureSize) {
            errorID(9100, maxSize, device.capabilities.maxTextureSize);
          }
          if (gpuTexture.samples === SampleCount.X1) {
            const glTexUnit = device.stateCache.glTexUnits[device.stateCache.texUnit];
            if (glTexUnit.glTexture !== gpuTexture.glTexture) {
              gl.bindTexture(gl.TEXTURE_2D, gpuTexture.glTexture);
              glTexUnit.glTexture = gpuTexture.glTexture;
            }
            if (FormatInfos[gpuTexture.format].isCompressed) {
              for (let i = 0; i < gpuTexture.mipLevel; ++i) {
                const imgSize = FormatSize(gpuTexture.format, w, h, 1);
                const view = new Uint8Array(imgSize);
                gl.compressedTexImage2D(gl.TEXTURE_2D, i, gpuTexture.glInternalFmt, w, h, 0, view);
                w = Math.max(1, w >> 1);
                h = Math.max(1, h >> 1);
              }
            } else {
              // immutable by default
              WebGL2CmdFuncDestroyTexture(device, gpuTexture);
              WebGL2CmdFuncCreateTexture(device, gpuTexture);
            }
          } else if (gpuTexture.glRenderbuffer) {
            if (device.stateCache.glRenderbuffer !== gpuTexture.glRenderbuffer) {
              gl.bindRenderbuffer(gl.RENDERBUFFER, gpuTexture.glRenderbuffer);
              device.stateCache.glRenderbuffer = gpuTexture.glRenderbuffer;
            }
            gl.renderbufferStorageMultisample(gl.RENDERBUFFER, gpuTexture.samples, gpuTexture.glInternalFmt, gpuTexture.width, gpuTexture.height);
          }
          break;
        }
      case TextureType.TEX2D_ARRAY:
        {
          gpuTexture.glTarget = gl.TEXTURE_2D_ARRAY;
          const maxSize = Math.max(w, h);
          if (maxSize > device.capabilities.maxTextureSize) {
            errorID(9100, maxSize, device.capabilities.maxTextureSize);
          }
          if (l > device.capabilities.maxArrayTextureLayers) {
            errorID(9100, l, device.capabilities.maxArrayTextureLayers);
          }
          gpuTexture.glTexture = gl.createTexture();
          if (gpuTexture.size > 0) {
            const glTexUnit = device.stateCache.glTexUnits[device.stateCache.texUnit];
            if (glTexUnit.glTexture !== gpuTexture.glTexture) {
              gl.bindTexture(gl.TEXTURE_2D_ARRAY, gpuTexture.glTexture);
              glTexUnit.glTexture = gpuTexture.glTexture;
            }
            if (FormatInfos[gpuTexture.format].isCompressed) {
              for (let i = 0; i < gpuTexture.mipLevel; ++i) {
                const imgSize = FormatSize(gpuTexture.format, w, h, l);
                const view = new Uint8Array(imgSize);
                gl.compressedTexImage3D(gl.TEXTURE_2D_ARRAY, i, gpuTexture.glInternalFmt, w, h, l, 0, view);
                w = Math.max(1, w >> 1);
                h = Math.max(1, h >> 1);
              }
            } else {
              gl.texStorage3D(gl.TEXTURE_2D_ARRAY, gpuTexture.mipLevel, gpuTexture.glInternalFmt, w, h, l);
            }
          }
          break;
        }
      case TextureType.TEX3D:
        {
          gpuTexture.glTarget = gl.TEXTURE_3D;
          const maxSize = Math.max(Math.max(w, h), d);
          if (maxSize > device.capabilities.max3DTextureSize) {
            errorID(9100, maxSize, device.capabilities.max3DTextureSize);
          }
          gpuTexture.glTexture = gl.createTexture();
          if (gpuTexture.size > 0) {
            const glTexUnit = device.stateCache.glTexUnits[device.stateCache.texUnit];
            if (glTexUnit.glTexture !== gpuTexture.glTexture) {
              gl.bindTexture(gl.TEXTURE_3D, gpuTexture.glTexture);
              glTexUnit.glTexture = gpuTexture.glTexture;
            }
            if (FormatInfos[gpuTexture.format].isCompressed) {
              for (let i = 0; i < gpuTexture.mipLevel; ++i) {
                const imgSize = FormatSize(gpuTexture.format, w, h, d);
                const view = new Uint8Array(imgSize);
                gl.compressedTexImage3D(gl.TEXTURE_3D, i, gpuTexture.glInternalFmt, w, h, d, 0, view);
                w = Math.max(1, w >> 1);
                h = Math.max(1, h >> 1);
              }
            } else {
              gl.texStorage3D(gl.TEXTURE_3D, gpuTexture.mipLevel, gpuTexture.glInternalFmt, w, h, d);
            }
          }
          break;
        }
      case TextureType.CUBE:
        {
          gpuTexture.type = TextureType.CUBE;
          gpuTexture.glTarget = gl.TEXTURE_CUBE_MAP;
          const maxSize = Math.max(w, h);
          if (maxSize > device.capabilities.maxCubeMapTextureSize) {
            errorID(9100, maxSize, device.capabilities.maxTextureSize);
          }
          const glTexUnit = device.stateCache.glTexUnits[device.stateCache.texUnit];
          if (glTexUnit.glTexture !== gpuTexture.glTexture) {
            gl.bindTexture(gl.TEXTURE_CUBE_MAP, gpuTexture.glTexture);
            glTexUnit.glTexture = gpuTexture.glTexture;
          }
          if (FormatInfos[gpuTexture.format].isCompressed) {
            for (let f = 0; f < 6; ++f) {
              w = gpuTexture.width;
              h = gpuTexture.height;
              for (let i = 0; i < gpuTexture.mipLevel; ++i) {
                const imgSize = FormatSize(gpuTexture.format, w, h, 1);
                const view = new Uint8Array(imgSize);
                gl.compressedTexImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + f, i, gpuTexture.glInternalFmt, w, h, 0, view);
                w = Math.max(1, w >> 1);
                h = Math.max(1, h >> 1);
              }
            }
          } else {
            // immutable by default
            WebGL2CmdFuncDestroyTexture(device, gpuTexture);
            WebGL2CmdFuncCreateTexture(device, gpuTexture);
          }
          break;
        }
      default:
        {
          error('Unsupported TextureType, create texture failed.');
          gpuTexture.type = TextureType.TEX2D;
          gpuTexture.glTarget = gl.TEXTURE_2D;
        }
    }
  }
  function WebGL2CmdFuncPrepareSamplerInfo(device, gpuSampler) {
    const {
      gl
    } = device;
    if (gpuSampler.minFilter === Filter.LINEAR || gpuSampler.minFilter === Filter.ANISOTROPIC) {
      if (gpuSampler.mipFilter === Filter.LINEAR || gpuSampler.mipFilter === Filter.ANISOTROPIC) {
        gpuSampler.glMinFilter = gl.LINEAR_MIPMAP_LINEAR;
      } else if (gpuSampler.mipFilter === Filter.POINT) {
        gpuSampler.glMinFilter = gl.LINEAR_MIPMAP_NEAREST;
      } else {
        gpuSampler.glMinFilter = gl.LINEAR;
      }
    } else if (gpuSampler.mipFilter === Filter.LINEAR || gpuSampler.mipFilter === Filter.ANISOTROPIC) {
      gpuSampler.glMinFilter = gl.NEAREST_MIPMAP_LINEAR;
    } else if (gpuSampler.mipFilter === Filter.POINT) {
      gpuSampler.glMinFilter = gl.NEAREST_MIPMAP_NEAREST;
    } else {
      gpuSampler.glMinFilter = gl.NEAREST;
    }
    if (gpuSampler.magFilter === Filter.LINEAR || gpuSampler.magFilter === Filter.ANISOTROPIC) {
      gpuSampler.glMagFilter = gl.LINEAR;
    } else {
      gpuSampler.glMagFilter = gl.NEAREST;
    }
    gpuSampler.glWrapS = WebGLWraps[gpuSampler.addressU];
    gpuSampler.glWrapT = WebGLWraps[gpuSampler.addressV];
    gpuSampler.glWrapR = WebGLWraps[gpuSampler.addressW];
  }
  function WebGL2CmdFuncDestroySampler(device, gpuSampler) {
    const {
      gl
    } = device;
    const it = gpuSampler.glSamplers.values();
    const res = it.next();
    while (!res.done) {
      gl.deleteSampler(res.value);
      const glSamplerUnits = device.stateCache.glSamplerUnits;
      for (let i = 0; i < glSamplerUnits.length; ++i) {
        if (glSamplerUnits[i] === res.value) {
          gl.bindSampler(i, null);
          glSamplerUnits[i] = null;
        }
      }
    }
    gpuSampler.glSamplers.clear();
  }
  function WebGL2CmdFuncCreateFramebuffer(device, gpuFramebuffer) {
    for (let i = 0; i < gpuFramebuffer.gpuColorViews.length; ++i) {
      const tex = gpuFramebuffer.gpuColorViews[i].gpuTexture;
      if (tex.isSwapchainTexture) {
        gpuFramebuffer.isOffscreen = false;
        return;
      }
    }
    const {
      gl
    } = device;
    const attachments = [];
    const glFramebuffer = gl.createFramebuffer();
    if (glFramebuffer) {
      gpuFramebuffer.glFramebuffer = glFramebuffer;
      if (device.stateCache.glFramebuffer !== gpuFramebuffer.glFramebuffer) {
        gl.bindFramebuffer(gl.FRAMEBUFFER, gpuFramebuffer.glFramebuffer);
      }
      for (let i = 0; i < gpuFramebuffer.gpuColorViews.length; ++i) {
        const colorTextureView = gpuFramebuffer.gpuColorViews[i];
        const colorTexture = colorTextureView.gpuTexture;
        if (colorTexture) {
          if (colorTexture.glTexture) {
            gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0 + i, colorTexture.glTarget, colorTexture.glTexture, colorTextureView.baseLevel);
          } else {
            gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0 + i, gl.RENDERBUFFER, colorTexture.glRenderbuffer);
          }
          attachments.push(gl.COLOR_ATTACHMENT0 + i);
          gpuFramebuffer.width = Math.min(gpuFramebuffer.width, colorTexture.width >> colorTextureView.baseLevel);
          gpuFramebuffer.height = Math.min(gpuFramebuffer.height, colorTexture.height >> colorTextureView.baseLevel);
        }
      }
      const dstView = gpuFramebuffer.gpuDepthStencilView;
      if (dstView) {
        const dst = dstView.gpuTexture;
        const glAttachment = FormatInfos[dst.format].hasStencil ? gl.DEPTH_STENCIL_ATTACHMENT : gl.DEPTH_ATTACHMENT;
        if (dst.glTexture) {
          gl.framebufferTexture2D(gl.FRAMEBUFFER, glAttachment, dst.glTarget, dst.glTexture, gpuFramebuffer.gpuDepthStencilView.baseLevel);
        } else {
          gl.framebufferRenderbuffer(gl.FRAMEBUFFER, glAttachment, gl.RENDERBUFFER, dst.glRenderbuffer);
        }
        gpuFramebuffer.width = Math.min(gpuFramebuffer.width, dst.width >> dstView.baseLevel);
        gpuFramebuffer.height = Math.min(gpuFramebuffer.height, dst.height >> dstView.baseLevel);
      }
      gl.drawBuffers(attachments);
      const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
      if (status !== gl.FRAMEBUFFER_COMPLETE) {
        switch (status) {
          case gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
            {
              error('glCheckFramebufferStatus() - FRAMEBUFFER_INCOMPLETE_ATTACHMENT');
              break;
            }
          case gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
            {
              error('glCheckFramebufferStatus() - FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT');
              break;
            }
          case gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
            {
              error('glCheckFramebufferStatus() - FRAMEBUFFER_INCOMPLETE_DIMENSIONS');
              break;
            }
          case gl.FRAMEBUFFER_UNSUPPORTED:
            {
              error('glCheckFramebufferStatus() - FRAMEBUFFER_UNSUPPORTED');
              break;
            }
          default:
        }
      }
      if (device.stateCache.glFramebuffer !== gpuFramebuffer.glFramebuffer) {
        gl.bindFramebuffer(gl.FRAMEBUFFER, device.stateCache.glFramebuffer);
      }
    }
  }
  function WebGL2CmdFuncDestroyFramebuffer(device, gpuFramebuffer) {
    if (gpuFramebuffer.glFramebuffer) {
      device.gl.deleteFramebuffer(gpuFramebuffer.glFramebuffer);
      if (device.stateCache.glFramebuffer === gpuFramebuffer.glFramebuffer) {
        device.gl.bindFramebuffer(device.gl.FRAMEBUFFER, null);
        device.stateCache.glFramebuffer = null;
      }
      gpuFramebuffer.glFramebuffer = null;
    }
  }
  function WebGL2CmdFuncCreateShader(device, gpuShader) {
    const {
      gl
    } = device;
    for (let k = 0; k < gpuShader.gpuStages.length; k++) {
      const gpuStage = gpuShader.gpuStages[k];
      let glShaderType = 0;
      let shaderTypeStr = '';
      let lineNumber = 1;
      switch (gpuStage.type) {
        case ShaderStageFlagBit.VERTEX:
          {
            shaderTypeStr = 'VertexShader';
            glShaderType = gl.VERTEX_SHADER;
            break;
          }
        case ShaderStageFlagBit.FRAGMENT:
          {
            shaderTypeStr = 'FragmentShader';
            glShaderType = gl.FRAGMENT_SHADER;
            break;
          }
        default:
          {
            error('Unsupported ShaderType.');
            return;
          }
      }
      const glShader = gl.createShader(glShaderType);
      if (glShader) {
        gpuStage.glShader = glShader;
        gl.shaderSource(gpuStage.glShader, `#version 300 es\n${gpuStage.source}`);
        gl.compileShader(gpuStage.glShader);
        if (!gl.getShaderParameter(gpuStage.glShader, gl.COMPILE_STATUS)) {
          error(`${shaderTypeStr} in '${gpuShader.name}' compilation failed.`);
          error('Shader source dump:', gpuStage.source.replace(/^|\n/g, () => `\n${lineNumber++} `));
          error(gl.getShaderInfoLog(gpuStage.glShader));
          for (let l = 0; l < gpuShader.gpuStages.length; l++) {
            const stage = gpuShader.gpuStages[k];
            if (stage.glShader) {
              gl.deleteShader(stage.glShader);
              stage.glShader = null;
            }
          }
          return;
        }
      }
    }
    const glProgram = gl.createProgram();
    if (!glProgram) {
      return;
    }
    gpuShader.glProgram = glProgram;
    const enableEffectImport = !!(cclegacy.rendering && cclegacy.rendering.enableEffectImport);

    // link program
    for (let k = 0; k < gpuShader.gpuStages.length; k++) {
      const gpuStage = gpuShader.gpuStages[k];
      gl.attachShader(gpuShader.glProgram, gpuStage.glShader);
    }
    gl.linkProgram(gpuShader.glProgram);

    // detach & delete immediately
    for (let k = 0; k < gpuShader.gpuStages.length; k++) {
      const gpuStage = gpuShader.gpuStages[k];
      if (gpuStage.glShader) {
        gl.detachShader(gpuShader.glProgram, gpuStage.glShader);
        gl.deleteShader(gpuStage.glShader);
        gpuStage.glShader = null;
      }
    }
    if (gl.getProgramParameter(gpuShader.glProgram, gl.LINK_STATUS)) {
      debug(`Shader '${gpuShader.name}' compilation succeeded.`);
    } else {
      error(`Failed to link shader '${gpuShader.name}'.`);
      error(gl.getProgramInfoLog(gpuShader.glProgram));
      return;
    }

    // parse inputs
    const activeAttribCount = gl.getProgramParameter(gpuShader.glProgram, gl.ACTIVE_ATTRIBUTES);
    gpuShader.glInputs = new Array(activeAttribCount);
    for (let i = 0; i < activeAttribCount; ++i) {
      const attribInfo = gl.getActiveAttrib(gpuShader.glProgram, i);
      if (attribInfo) {
        let varName;
        const nameOffset = attribInfo.name.indexOf('[');
        if (nameOffset !== -1) {
          varName = attribInfo.name.substr(0, nameOffset);
        } else {
          varName = attribInfo.name;
        }
        const glLoc = gl.getAttribLocation(gpuShader.glProgram, varName);
        const type = WebGLTypeToGFXType(attribInfo.type, gl);
        const stride = WebGLGetTypeSize(attribInfo.type, gl);
        gpuShader.glInputs[i] = {
          name: varName,
          type,
          stride,
          count: attribInfo.size,
          size: stride * attribInfo.size,
          glType: attribInfo.type,
          glLoc
        };
      }
    }

    // create uniform blocks
    const activeBlockCount = gl.getProgramParameter(gpuShader.glProgram, gl.ACTIVE_UNIFORM_BLOCKS);
    let blockName;
    let blockIdx;
    let blockSize;
    let block;
    if (activeBlockCount) {
      gpuShader.glBlocks = new Array(activeBlockCount);
      for (let b = 0; b < activeBlockCount; ++b) {
        blockName = gl.getActiveUniformBlockName(gpuShader.glProgram, b);
        const nameOffset = blockName.indexOf('[');
        if (nameOffset !== -1) {
          blockName = blockName.substr(0, nameOffset);
        }

        // blockIdx = gl.getUniformBlockIndex(gpuShader.glProgram, blockName);
        block = null;
        for (let k = 0; k < gpuShader.blocks.length; k++) {
          if (gpuShader.blocks[k].name === blockName) {
            block = gpuShader.blocks[k];
            break;
          }
        }
        if (!block) {
          error(`Block '${blockName}' does not bound`);
        } else {
          // blockIdx = gl.getUniformBlockIndex(gpuShader.glProgram, blockName);
          blockIdx = b;
          blockSize = gl.getActiveUniformBlockParameter(gpuShader.glProgram, blockIdx, gl.UNIFORM_BLOCK_DATA_SIZE);
          const glBinding = enableEffectImport ? block.flattened : block.binding + (device.bindingMappings.blockOffsets[block.set] || 0);
          gl.uniformBlockBinding(gpuShader.glProgram, blockIdx, glBinding);
          gpuShader.glBlocks[b] = {
            set: block.set,
            binding: block.binding,
            idx: blockIdx,
            name: blockName,
            size: blockSize,
            glBinding
          };
        }
      }
    }

    // WebGL doesn't support Framebuffer Fetch
    for (let i = 0; i < gpuShader.subpassInputs.length; ++i) {
      const subpassInput = gpuShader.subpassInputs[i];
      gpuShader.samplerTextures.push(new UniformSamplerTexture(subpassInput.set, subpassInput.binding, subpassInput.name, Type.SAMPLER2D, subpassInput.count));
    }

    // create uniform sampler textures
    if (gpuShader.samplerTextures.length > 0) {
      gpuShader.glSamplerTextures = new Array(gpuShader.samplerTextures.length);
      for (let i = 0; i < gpuShader.samplerTextures.length; ++i) {
        const sampler = gpuShader.samplerTextures[i];
        gpuShader.glSamplerTextures[i] = {
          set: sampler.set,
          binding: sampler.binding,
          name: sampler.name,
          type: sampler.type,
          count: sampler.count,
          units: [],
          glUnits: null,
          glType: GFXTypeToWebGLType(sampler.type, gl),
          glLoc: null
        };
      }
    }

    // texture unit index mapping optimization
    const glActiveSamplers = [];
    const glActiveSamplerLocations = [];
    const texUnitCacheMap = device.stateCache.texUnitCacheMap;
    if (!enableEffectImport) {
      let flexibleSetBaseOffset = 0;
      for (let i = 0; i < gpuShader.blocks.length; ++i) {
        if (gpuShader.blocks[i].set === device.bindingMappings.flexibleSet) {
          flexibleSetBaseOffset++;
        }
      }
      let arrayOffset = 0;
      for (let i = 0; i < gpuShader.samplerTextures.length; ++i) {
        const sampler = gpuShader.samplerTextures[i];
        const glLoc = gl.getUniformLocation(gpuShader.glProgram, sampler.name);
        // wEcHAT just returns { id: -1 } for non-existing names /eyerolling
        if (glLoc && glLoc.id !== -1) {
          glActiveSamplers.push(gpuShader.glSamplerTextures[i]);
          glActiveSamplerLocations.push(glLoc);
        }
        if (texUnitCacheMap[sampler.name] === undefined) {
          let binding = sampler.binding + device.bindingMappings.samplerTextureOffsets[sampler.set] + arrayOffset;
          if (sampler.set === device.bindingMappings.flexibleSet) {
            binding -= flexibleSetBaseOffset;
          }
          texUnitCacheMap[sampler.name] = binding % device.capabilities.maxTextureUnits;
          arrayOffset += sampler.count - 1;
        }
      }
    } else {
      for (let i = 0; i < gpuShader.samplerTextures.length; ++i) {
        const sampler = gpuShader.samplerTextures[i];
        const glLoc = gl.getUniformLocation(gpuShader.glProgram, sampler.name);
        // wEcHAT just returns { id: -1 } for non-existing names /eyerolling
        if (glLoc && glLoc.id !== -1) {
          glActiveSamplers.push(gpuShader.glSamplerTextures[i]);
          glActiveSamplerLocations.push(glLoc);
        }
        if (texUnitCacheMap[sampler.name] === undefined) {
          texUnitCacheMap[sampler.name] = sampler.flattened % device.capabilities.maxTextureUnits;
        }
      }
    }
    if (glActiveSamplers.length) {
      const usedTexUnits = [];
      // try to reuse existing mappings first
      for (let i = 0; i < glActiveSamplers.length; ++i) {
        const glSampler = glActiveSamplers[i];
        let cachedUnit = texUnitCacheMap[glSampler.name];
        if (cachedUnit !== undefined) {
          glSampler.glLoc = glActiveSamplerLocations[i];
          for (let t = 0; t < glSampler.count; ++t) {
            while (usedTexUnits[cachedUnit]) {
              cachedUnit = (cachedUnit + 1) % device.capabilities.maxTextureUnits;
            }
            glSampler.units.push(cachedUnit);
            usedTexUnits[cachedUnit] = true;
          }
        }
      }
      // fill in the rest sequencially
      let unitIdx = 0;
      for (let i = 0; i < glActiveSamplers.length; ++i) {
        const glSampler = glActiveSamplers[i];
        if (!glSampler.glLoc) {
          glSampler.glLoc = glActiveSamplerLocations[i];
          while (usedTexUnits[unitIdx]) {
            unitIdx++;
          }
          for (let t = 0; t < glSampler.count; ++t) {
            while (usedTexUnits[unitIdx]) {
              unitIdx = (unitIdx + 1) % device.capabilities.maxTextureUnits;
            }
            if (texUnitCacheMap[glSampler.name] === undefined) {
              texUnitCacheMap[glSampler.name] = unitIdx;
            }
            glSampler.units.push(unitIdx);
            usedTexUnits[unitIdx] = true;
          }
        }
      }
      if (device.stateCache.glProgram !== gpuShader.glProgram) {
        gl.useProgram(gpuShader.glProgram);
      }
      for (let k = 0; k < glActiveSamplers.length; k++) {
        const glSampler = glActiveSamplers[k];
        glSampler.glUnits = new Int32Array(glSampler.units);
        gl.uniform1iv(glSampler.glLoc, glSampler.glUnits);
      }
      if (device.stateCache.glProgram !== gpuShader.glProgram) {
        gl.useProgram(device.stateCache.glProgram);
      }
    }
    gpuShader.glSamplerTextures = glActiveSamplers;
  }
  function WebGL2CmdFuncDestroyShader(device, gpuShader) {
    if (gpuShader.glProgram) {
      device.gl.deleteProgram(gpuShader.glProgram);
      if (device.stateCache.glProgram === gpuShader.glProgram) {
        device.gl.useProgram(null);
        device.stateCache.glProgram = null;
      }
      gpuShader.glProgram = null;
    }
  }
  function WebGL2CmdFuncCreateInputAssember(device, gpuInputAssembler) {
    const {
      gl
    } = device;
    gpuInputAssembler.glAttribs = new Array(gpuInputAssembler.attributes.length);
    const offsets = [0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < gpuInputAssembler.attributes.length; ++i) {
      const attrib = gpuInputAssembler.attributes[i];
      const stream = attrib.stream !== undefined ? attrib.stream : 0;
      // if (stream < gpuInputAssembler.gpuVertexBuffers.length) {

      const gpuBuffer = gpuInputAssembler.gpuVertexBuffers[stream];
      const glType = GFXFormatToWebGLType(attrib.format, gl);
      const {
        size
      } = FormatInfos[attrib.format];
      gpuInputAssembler.glAttribs[i] = {
        name: attrib.name,
        glBuffer: gpuBuffer.glBuffer,
        glType,
        size,
        count: FormatInfos[attrib.format].count,
        stride: gpuBuffer.stride,
        componentCount: WebGLGetComponentCount(glType, gl),
        isNormalized: attrib.isNormalized !== undefined ? attrib.isNormalized : false,
        isInstanced: attrib.isInstanced !== undefined ? attrib.isInstanced : false,
        offset: offsets[stream]
      };
      offsets[stream] += size;
    }
  }
  function WebGL2CmdFuncDestroyInputAssembler(device, gpuInputAssembler) {
    const it = gpuInputAssembler.glVAOs.values();
    let res = it.next();
    const {
      gl
    } = device;
    let glVAO = device.stateCache.glVAO;
    while (!res.done) {
      gl.deleteVertexArray(res.value);
      if (glVAO === res.value) {
        gl.bindVertexArray(null);
        glVAO = null;
      }
      res = it.next();
    }
    device.stateCache.glVAO = glVAO;
    gpuInputAssembler.glVAOs.clear();
  }
  function WebGL2CmdFuncBeginRenderPass(device, gpuRenderPass, gpuFramebuffer, renderArea, clearColors, clearDepth, clearStencil) {
    const {
      gl
    } = device;
    const cache = device.stateCache;
    let clears = 0;
    if (gpuFramebuffer && gpuRenderPass) {
      if (cache.glFramebuffer !== gpuFramebuffer.glFramebuffer) {
        gl.bindFramebuffer(gl.FRAMEBUFFER, gpuFramebuffer.glFramebuffer);
        cache.glFramebuffer = gpuFramebuffer.glFramebuffer;
      }
      if (cache.viewport.left !== renderArea.x || cache.viewport.top !== renderArea.y || cache.viewport.width !== renderArea.width || cache.viewport.height !== renderArea.height) {
        gl.viewport(renderArea.x, renderArea.y, renderArea.width, renderArea.height);
        cache.viewport.left = renderArea.x;
        cache.viewport.top = renderArea.y;
        cache.viewport.width = renderArea.width;
        cache.viewport.height = renderArea.height;
      }
      if (cache.scissorRect.x !== renderArea.x || cache.scissorRect.y !== renderArea.y || cache.scissorRect.width !== renderArea.width || cache.scissorRect.height !== renderArea.height) {
        gl.scissor(renderArea.x, renderArea.y, renderArea.width, renderArea.height);
        cache.scissorRect.x = renderArea.x;
        cache.scissorRect.y = renderArea.y;
        cache.scissorRect.width = renderArea.width;
        cache.scissorRect.height = renderArea.height;
      }
      gfxStateCache.invalidateAttachments.length = 0;
      for (let j = 0; j < clearColors.length; ++j) {
        const colorAttachment = gpuRenderPass.colorAttachments[j];
        if (colorAttachment.format !== Format.UNKNOWN) {
          switch (colorAttachment.loadOp) {
            case LoadOp.LOAD:
              break;
            // GL default behavior
            case LoadOp.CLEAR:
              {
                if (cache.bs.targets[0].blendColorMask !== ColorMask.ALL) {
                  gl.colorMask(true, true, true, true);
                }

                // We-chat mini-game, glClearBufferfv get INVALID_ENUM. MRT may not be supported. use clearColor instead.
                if (gpuRenderPass.colorAttachments.length === 1) {
                  const clearColor = clearColors[0];
                  gl.clearColor(clearColor.x, clearColor.y, clearColor.z, clearColor.w);
                  clears |= gl.COLOR_BUFFER_BIT;
                } else {
                  _f32v4[0] = clearColors[j].x;
                  _f32v4[1] = clearColors[j].y;
                  _f32v4[2] = clearColors[j].z;
                  _f32v4[3] = clearColors[j].w;
                  gl.clearBufferfv(gl.COLOR, j, _f32v4);
                }
                break;
              }
            case LoadOp.DISCARD:
              {
                // invalidate the framebuffer
                gfxStateCache.invalidateAttachments.push(gl.COLOR_ATTACHMENT0 + j);
                break;
              }
            default:
          }
        }
      } // if (curGPURenderPass)

      if (gpuRenderPass.depthStencilAttachment) {
        if (gpuRenderPass.depthStencilAttachment.format !== Format.UNKNOWN) {
          switch (gpuRenderPass.depthStencilAttachment.depthLoadOp) {
            case LoadOp.LOAD:
              break;
            // GL default behavior
            case LoadOp.CLEAR:
              {
                if (!cache.dss.depthWrite) {
                  gl.depthMask(true);
                }
                gl.clearDepth(clearDepth);
                clears |= gl.DEPTH_BUFFER_BIT;
                break;
              }
            case LoadOp.DISCARD:
              {
                // invalidate the framebuffer
                gfxStateCache.invalidateAttachments.push(gl.DEPTH_ATTACHMENT);
                break;
              }
            default:
          }
          if (FormatInfos[gpuRenderPass.depthStencilAttachment.format].hasStencil) {
            switch (gpuRenderPass.depthStencilAttachment.stencilLoadOp) {
              case LoadOp.LOAD:
                break;
              // GL default behavior
              case LoadOp.CLEAR:
                {
                  if (!cache.dss.stencilWriteMaskFront) {
                    gl.stencilMaskSeparate(gl.FRONT, 0xffff);
                  }
                  if (!cache.dss.stencilWriteMaskBack) {
                    gl.stencilMaskSeparate(gl.BACK, 0xffff);
                  }
                  gl.clearStencil(clearStencil);
                  clears |= gl.STENCIL_BUFFER_BIT;
                  break;
                }
              case LoadOp.DISCARD:
                {
                  // invalidate the framebuffer
                  gfxStateCache.invalidateAttachments.push(gl.STENCIL_ATTACHMENT);
                  break;
                }
              default:
            }
          }
        }
      } // if (curGPURenderPass.depthStencilAttachment)

      if (gpuFramebuffer.glFramebuffer && gfxStateCache.invalidateAttachments.length) {
        gl.invalidateFramebuffer(gl.FRAMEBUFFER, gfxStateCache.invalidateAttachments);
      }
      if (clears) {
        gl.clear(clears);
      }

      // restore states
      if (clears & gl.COLOR_BUFFER_BIT) {
        const colorMask = cache.bs.targets[0].blendColorMask;
        if (colorMask !== ColorMask.ALL) {
          const r = (colorMask & ColorMask.R) !== ColorMask.NONE;
          const g = (colorMask & ColorMask.G) !== ColorMask.NONE;
          const b = (colorMask & ColorMask.B) !== ColorMask.NONE;
          const a = (colorMask & ColorMask.A) !== ColorMask.NONE;
          gl.colorMask(r, g, b, a);
        }
      }
      if (clears & gl.DEPTH_BUFFER_BIT && !cache.dss.depthWrite) {
        gl.depthMask(false);
      }
      if (clears & gl.STENCIL_BUFFER_BIT) {
        if (!cache.dss.stencilWriteMaskFront) {
          gl.stencilMaskSeparate(gl.FRONT, 0);
        }
        if (!cache.dss.stencilWriteMaskBack) {
          gl.stencilMaskSeparate(gl.BACK, 0);
        }
      }
    } // if (gpuFramebuffer)
  }

  function WebGL2CmdFuncBindStates(device, gpuPipelineState, gpuInputAssembler, gpuDescriptorSets, dynamicOffsets, dynamicStates) {
    const {
      gl
    } = device;
    const cache = device.stateCache;
    const gpuShader = gpuPipelineState && gpuPipelineState.gpuShader;
    let isShaderChanged = false;

    // bind pipeline
    if (gpuPipelineState && gfxStateCache.gpuPipelineState !== gpuPipelineState) {
      gfxStateCache.gpuPipelineState = gpuPipelineState;
      gfxStateCache.glPrimitive = gpuPipelineState.glPrimitive;
      if (gpuShader) {
        const {
          glProgram
        } = gpuShader;
        if (cache.glProgram !== glProgram) {
          gl.useProgram(glProgram);
          cache.glProgram = glProgram;
          isShaderChanged = true;
        }
      }

      // rasterizer state
      const {
        rs
      } = gpuPipelineState;
      if (rs) {
        if (cache.rs.cullMode !== rs.cullMode) {
          switch (rs.cullMode) {
            case CullMode.NONE:
              {
                gl.disable(gl.CULL_FACE);
                break;
              }
            case CullMode.FRONT:
              {
                gl.enable(gl.CULL_FACE);
                gl.cullFace(gl.FRONT);
                break;
              }
            case CullMode.BACK:
              {
                gl.enable(gl.CULL_FACE);
                gl.cullFace(gl.BACK);
                break;
              }
            default:
          }
          device.stateCache.rs.cullMode = rs.cullMode;
        }
        const isFrontFaceCCW = rs.isFrontFaceCCW; // boolean XOR
        if (device.stateCache.rs.isFrontFaceCCW !== isFrontFaceCCW) {
          gl.frontFace(isFrontFaceCCW ? gl.CCW : gl.CW);
          device.stateCache.rs.isFrontFaceCCW = isFrontFaceCCW;
        }
        if (device.stateCache.rs.depthBias !== rs.depthBias || device.stateCache.rs.depthBiasSlop !== rs.depthBiasSlop) {
          gl.polygonOffset(rs.depthBias, rs.depthBiasSlop);
          device.stateCache.rs.depthBias = rs.depthBias;
          device.stateCache.rs.depthBiasSlop = rs.depthBiasSlop;
        }
        if (device.stateCache.rs.lineWidth !== rs.lineWidth) {
          gl.lineWidth(rs.lineWidth);
          device.stateCache.rs.lineWidth = rs.lineWidth;
        }
      } // rasterizater state

      // depth-stencil state
      const {
        dss
      } = gpuPipelineState;
      if (dss) {
        if (cache.dss.depthTest !== dss.depthTest) {
          if (dss.depthTest) {
            gl.enable(gl.DEPTH_TEST);
          } else {
            gl.disable(gl.DEPTH_TEST);
          }
          cache.dss.depthTest = dss.depthTest;
        }
        if (cache.dss.depthWrite !== dss.depthWrite) {
          gl.depthMask(dss.depthWrite);
          cache.dss.depthWrite = dss.depthWrite;
        }
        if (cache.dss.depthFunc !== dss.depthFunc) {
          gl.depthFunc(WebGLCmpFuncs[dss.depthFunc]);
          cache.dss.depthFunc = dss.depthFunc;
        }

        // front
        if (cache.dss.stencilTestFront !== dss.stencilTestFront || cache.dss.stencilTestBack !== dss.stencilTestBack) {
          if (dss.stencilTestFront || dss.stencilTestBack) {
            gl.enable(gl.STENCIL_TEST);
          } else {
            gl.disable(gl.STENCIL_TEST);
          }
          cache.dss.stencilTestFront = dss.stencilTestFront;
          cache.dss.stencilTestBack = dss.stencilTestBack;
        }
        if (cache.dss.stencilFuncFront !== dss.stencilFuncFront || cache.dss.stencilRefFront !== dss.stencilRefFront || cache.dss.stencilReadMaskFront !== dss.stencilReadMaskFront) {
          gl.stencilFuncSeparate(gl.FRONT, WebGLCmpFuncs[dss.stencilFuncFront], dss.stencilRefFront, dss.stencilReadMaskFront);
          cache.dss.stencilFuncFront = dss.stencilFuncFront;
          cache.dss.stencilRefFront = dss.stencilRefFront;
          cache.dss.stencilReadMaskFront = dss.stencilReadMaskFront;
        }
        if (cache.dss.stencilFailOpFront !== dss.stencilFailOpFront || cache.dss.stencilZFailOpFront !== dss.stencilZFailOpFront || cache.dss.stencilPassOpFront !== dss.stencilPassOpFront) {
          gl.stencilOpSeparate(gl.FRONT, WebGLStencilOps[dss.stencilFailOpFront], WebGLStencilOps[dss.stencilZFailOpFront], WebGLStencilOps[dss.stencilPassOpFront]);
          cache.dss.stencilFailOpFront = dss.stencilFailOpFront;
          cache.dss.stencilZFailOpFront = dss.stencilZFailOpFront;
          cache.dss.stencilPassOpFront = dss.stencilPassOpFront;
        }
        if (cache.dss.stencilWriteMaskFront !== dss.stencilWriteMaskFront) {
          gl.stencilMaskSeparate(gl.FRONT, dss.stencilWriteMaskFront);
          cache.dss.stencilWriteMaskFront = dss.stencilWriteMaskFront;
        }

        // back
        if (cache.dss.stencilFuncBack !== dss.stencilFuncBack || cache.dss.stencilRefBack !== dss.stencilRefBack || cache.dss.stencilReadMaskBack !== dss.stencilReadMaskBack) {
          gl.stencilFuncSeparate(gl.BACK, WebGLCmpFuncs[dss.stencilFuncBack], dss.stencilRefBack, dss.stencilReadMaskBack);
          cache.dss.stencilFuncBack = dss.stencilFuncBack;
          cache.dss.stencilRefBack = dss.stencilRefBack;
          cache.dss.stencilReadMaskBack = dss.stencilReadMaskBack;
        }
        if (cache.dss.stencilFailOpBack !== dss.stencilFailOpBack || cache.dss.stencilZFailOpBack !== dss.stencilZFailOpBack || cache.dss.stencilPassOpBack !== dss.stencilPassOpBack) {
          gl.stencilOpSeparate(gl.BACK, WebGLStencilOps[dss.stencilFailOpBack], WebGLStencilOps[dss.stencilZFailOpBack], WebGLStencilOps[dss.stencilPassOpBack]);
          cache.dss.stencilFailOpBack = dss.stencilFailOpBack;
          cache.dss.stencilZFailOpBack = dss.stencilZFailOpBack;
          cache.dss.stencilPassOpBack = dss.stencilPassOpBack;
        }
        if (cache.dss.stencilWriteMaskBack !== dss.stencilWriteMaskBack) {
          gl.stencilMaskSeparate(gl.BACK, dss.stencilWriteMaskBack);
          cache.dss.stencilWriteMaskBack = dss.stencilWriteMaskBack;
        }
      } // depth-stencil state

      // blend state
      const {
        bs
      } = gpuPipelineState;
      if (bs) {
        if (cache.bs.isA2C !== bs.isA2C) {
          if (bs.isA2C) {
            gl.enable(gl.SAMPLE_ALPHA_TO_COVERAGE);
          } else {
            gl.disable(gl.SAMPLE_ALPHA_TO_COVERAGE);
          }
          cache.bs.isA2C = bs.isA2C;
        }
        if (cache.bs.blendColor.x !== bs.blendColor.x || cache.bs.blendColor.y !== bs.blendColor.y || cache.bs.blendColor.z !== bs.blendColor.z || cache.bs.blendColor.w !== bs.blendColor.w) {
          gl.blendColor(bs.blendColor.x, bs.blendColor.y, bs.blendColor.z, bs.blendColor.w);
          cache.bs.blendColor.x = bs.blendColor.x;
          cache.bs.blendColor.y = bs.blendColor.y;
          cache.bs.blendColor.z = bs.blendColor.z;
          cache.bs.blendColor.w = bs.blendColor.w;
        }
        const target0 = bs.targets[0];
        const target0Cache = cache.bs.targets[0];
        if (target0Cache.blend !== target0.blend) {
          if (target0.blend) {
            gl.enable(gl.BLEND);
          } else {
            gl.disable(gl.BLEND);
          }
          target0Cache.blend = target0.blend;
        }
        if (target0Cache.blendEq !== target0.blendEq || target0Cache.blendAlphaEq !== target0.blendAlphaEq) {
          gl.blendEquationSeparate(WebGLBlendOps[target0.blendEq], WebGLBlendOps[target0.blendAlphaEq]);
          target0Cache.blendEq = target0.blendEq;
          target0Cache.blendAlphaEq = target0.blendAlphaEq;
        }
        if (target0Cache.blendSrc !== target0.blendSrc || target0Cache.blendDst !== target0.blendDst || target0Cache.blendSrcAlpha !== target0.blendSrcAlpha || target0Cache.blendDstAlpha !== target0.blendDstAlpha) {
          gl.blendFuncSeparate(WebGLBlendFactors[target0.blendSrc], WebGLBlendFactors[target0.blendDst], WebGLBlendFactors[target0.blendSrcAlpha], WebGLBlendFactors[target0.blendDstAlpha]);
          target0Cache.blendSrc = target0.blendSrc;
          target0Cache.blendDst = target0.blendDst;
          target0Cache.blendSrcAlpha = target0.blendSrcAlpha;
          target0Cache.blendDstAlpha = target0.blendDstAlpha;
        }
        if (target0Cache.blendColorMask !== target0.blendColorMask) {
          gl.colorMask((target0.blendColorMask & ColorMask.R) !== ColorMask.NONE, (target0.blendColorMask & ColorMask.G) !== ColorMask.NONE, (target0.blendColorMask & ColorMask.B) !== ColorMask.NONE, (target0.blendColorMask & ColorMask.A) !== ColorMask.NONE);
          target0Cache.blendColorMask = target0.blendColorMask;
        }
      } // blend state
    } // bind pipeline

    // bind descriptor sets
    if (gpuPipelineState && gpuPipelineState.gpuPipelineLayout && gpuShader) {
      const blockLen = gpuShader.glBlocks.length;
      const {
        dynamicOffsetIndices
      } = gpuPipelineState.gpuPipelineLayout;
      for (let j = 0; j < blockLen; j++) {
        const glBlock = gpuShader.glBlocks[j];
        const gpuDescriptorSet = gpuDescriptorSets[glBlock.set];
        const descriptorIndex = gpuDescriptorSet && gpuDescriptorSet.descriptorIndices[glBlock.binding];
        const gpuDescriptor = descriptorIndex >= 0 && gpuDescriptorSet.gpuDescriptors[descriptorIndex];
        if (!gpuDescriptor || !gpuDescriptor.gpuBuffer) {
          // error(`Buffer binding '${glBlock.name}' at set ${glBlock.set} binding ${glBlock.binding} is not bounded`);
          continue;
        }
        const dynamicOffsetIndexSet = dynamicOffsetIndices[glBlock.set];
        const dynamicOffsetIndex = dynamicOffsetIndexSet && dynamicOffsetIndexSet[glBlock.binding];
        let offset = gpuDescriptor.gpuBuffer.glOffset;
        if (dynamicOffsetIndex >= 0) {
          offset += dynamicOffsets[dynamicOffsetIndex];
        }
        if (cache.glBindUBOs[glBlock.glBinding] !== gpuDescriptor.gpuBuffer.glBuffer || cache.glBindUBOOffsets[glBlock.glBinding] !== offset) {
          if (offset) {
            gl.bindBufferRange(gl.UNIFORM_BUFFER, glBlock.glBinding, gpuDescriptor.gpuBuffer.glBuffer, offset, gpuDescriptor.gpuBuffer.size);
          } else {
            gl.bindBufferBase(gl.UNIFORM_BUFFER, glBlock.glBinding, gpuDescriptor.gpuBuffer.glBuffer);
          }
          cache.glUniformBuffer = cache.glBindUBOs[glBlock.glBinding] = gpuDescriptor.gpuBuffer.glBuffer;
          cache.glBindUBOOffsets[glBlock.glBinding] = offset;
        }
      }
      const samplerLen = gpuShader.glSamplerTextures.length;
      for (let i = 0; i < samplerLen; i++) {
        const glSampler = gpuShader.glSamplerTextures[i];
        const gpuDescriptorSet = gpuDescriptorSets[glSampler.set];
        let descriptorIndex = gpuDescriptorSet && gpuDescriptorSet.descriptorIndices[glSampler.binding];
        let gpuDescriptor = descriptorIndex >= 0 && gpuDescriptorSet.gpuDescriptors[descriptorIndex];
        for (let l = 0; l < glSampler.units.length; l++) {
          const texUnit = glSampler.units[l];
          const glTexUnit = cache.glTexUnits[texUnit];
          if (!gpuDescriptor || !gpuDescriptor.gpuTextureView || !gpuDescriptor.gpuTextureView.gpuTexture || !gpuDescriptor.gpuSampler) {
            // error(`Sampler binding '${glSampler.name}' at set ${glSampler.set} binding ${glSampler.binding} index ${l} is not bounded`);
            continue;
          }
          const gpuTextureView = gpuDescriptor.gpuTextureView;
          const gpuTexture = gpuTextureView.gpuTexture;
          const minLod = gpuTextureView.baseLevel;
          const maxLod = minLod + gpuTextureView.levelCount;
          if (gpuTexture.size > 0) {
            if (glTexUnit.glTexture !== gpuTexture.glTexture) {
              if (cache.texUnit !== texUnit) {
                gl.activeTexture(gl.TEXTURE0 + texUnit);
                cache.texUnit = texUnit;
              }
              if (gpuTexture.glTexture) {
                gl.bindTexture(gpuTexture.glTarget, gpuTexture.glTexture);
              } else {
                gl.bindTexture(gpuTexture.glTarget, device.nullTex2D.gpuTexture.glTexture);
              }
              glTexUnit.glTexture = gpuTexture.glTexture;
            }
            const {
              gpuSampler
            } = gpuDescriptor; // get sampler with different mipmap levels
            const glSampler = gpuSampler.getGLSampler(device, minLod, maxLod);
            if (cache.glSamplerUnits[texUnit] !== glSampler) {
              gl.bindSampler(texUnit, glSampler);
              cache.glSamplerUnits[texUnit] = glSampler;
            }
          }
          gpuDescriptor = gpuDescriptorSet.gpuDescriptors[++descriptorIndex];
        }
      }
    } // bind descriptor sets

    // bind vertex/index buffer
    if (gpuInputAssembler && gpuShader && (isShaderChanged || gfxStateCache.gpuInputAssembler !== gpuInputAssembler)) {
      gfxStateCache.gpuInputAssembler = gpuInputAssembler;
      if (device.extensions.useVAO) {
        // check vao
        let glVAO = gpuInputAssembler.glVAOs.get(gpuShader.glProgram);
        if (!glVAO) {
          glVAO = gl.createVertexArray();
          gpuInputAssembler.glVAOs.set(gpuShader.glProgram, glVAO);
          gl.bindVertexArray(glVAO);
          gl.bindBuffer(gl.ARRAY_BUFFER, null);
          gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
          cache.glArrayBuffer = null;
          cache.glElementArrayBuffer = null;
          let glAttrib;
          for (let j = 0; j < gpuShader.glInputs.length; j++) {
            const glInput = gpuShader.glInputs[j];
            glAttrib = null;
            for (let k = 0; k < gpuInputAssembler.glAttribs.length; k++) {
              const attrib = gpuInputAssembler.glAttribs[k];
              if (attrib.name === glInput.name) {
                glAttrib = attrib;
                break;
              }
            }
            if (glAttrib) {
              if (cache.glArrayBuffer !== glAttrib.glBuffer) {
                gl.bindBuffer(gl.ARRAY_BUFFER, glAttrib.glBuffer);
                cache.glArrayBuffer = glAttrib.glBuffer;
              }
              for (let c = 0; c < glAttrib.componentCount; ++c) {
                const glLoc = glInput.glLoc + c;
                const attribOffset = glAttrib.offset + glAttrib.size * c;
                gl.enableVertexAttribArray(glLoc);
                cache.glCurrentAttribLocs[glLoc] = true;
                gl.vertexAttribPointer(glLoc, glAttrib.count, glAttrib.glType, glAttrib.isNormalized, glAttrib.stride, attribOffset);
                gl.vertexAttribDivisor(glLoc, glAttrib.isInstanced ? 1 : 0);
              }
            }
          }
          const gpuBuffer = gpuInputAssembler.gpuIndexBuffer;
          if (gpuBuffer) {
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gpuBuffer.glBuffer);
          }
          gl.bindVertexArray(null);
          gl.bindBuffer(gl.ARRAY_BUFFER, null);
          gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
          cache.glArrayBuffer = null;
          cache.glElementArrayBuffer = null;
        }
        if (cache.glVAO !== glVAO) {
          gl.bindVertexArray(glVAO);
          cache.glVAO = glVAO;
        }
      } else {
        for (let a = 0; a < device.capabilities.maxVertexAttributes; ++a) {
          cache.glCurrentAttribLocs[a] = false;
        }
        for (let j = 0; j < gpuShader.glInputs.length; j++) {
          const glInput = gpuShader.glInputs[j];
          let glAttrib = null;
          for (let k = 0; k < gpuInputAssembler.glAttribs.length; k++) {
            const attrib = gpuInputAssembler.glAttribs[k];
            if (attrib.name === glInput.name) {
              glAttrib = attrib;
              break;
            }
          }
          if (glAttrib) {
            if (cache.glArrayBuffer !== glAttrib.glBuffer) {
              gl.bindBuffer(gl.ARRAY_BUFFER, glAttrib.glBuffer);
              cache.glArrayBuffer = glAttrib.glBuffer;
            }
            for (let c = 0; c < glAttrib.componentCount; ++c) {
              const glLoc = glInput.glLoc + c;
              const attribOffset = glAttrib.offset + glAttrib.size * c;
              if (!cache.glEnabledAttribLocs[glLoc] && glLoc >= 0) {
                gl.enableVertexAttribArray(glLoc);
                cache.glEnabledAttribLocs[glLoc] = true;
              }
              cache.glCurrentAttribLocs[glLoc] = true;
              gl.vertexAttribPointer(glLoc, glAttrib.count, glAttrib.glType, glAttrib.isNormalized, glAttrib.stride, attribOffset);
              gl.vertexAttribDivisor(glLoc, glAttrib.isInstanced ? 1 : 0);
            }
          }
        } // for

        const gpuBuffer = gpuInputAssembler.gpuIndexBuffer;
        if (gpuBuffer) {
          if (cache.glElementArrayBuffer !== gpuBuffer.glBuffer) {
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gpuBuffer.glBuffer);
            cache.glElementArrayBuffer = gpuBuffer.glBuffer;
          }
        }
        for (let a = 0; a < device.capabilities.maxVertexAttributes; ++a) {
          if (cache.glEnabledAttribLocs[a] !== cache.glCurrentAttribLocs[a]) {
            gl.disableVertexAttribArray(a);
            cache.glEnabledAttribLocs[a] = false;
          }
        }
      }
    } // bind vertex/index buffer

    // update dynamic states
    if (gpuPipelineState && gpuPipelineState.dynamicStates.length) {
      const dsLen = gpuPipelineState.dynamicStates.length;
      for (let k = 0; k < dsLen; k++) {
        const dynamicState = gpuPipelineState.dynamicStates[k];
        switch (dynamicState) {
          case DynamicStateFlagBit.LINE_WIDTH:
            {
              if (cache.rs.lineWidth !== dynamicStates.lineWidth) {
                gl.lineWidth(dynamicStates.lineWidth);
                cache.rs.lineWidth = dynamicStates.lineWidth;
              }
              break;
            }
          case DynamicStateFlagBit.DEPTH_BIAS:
            {
              if (cache.rs.depthBias !== dynamicStates.depthBiasConstant || cache.rs.depthBiasSlop !== dynamicStates.depthBiasSlope) {
                gl.polygonOffset(dynamicStates.depthBiasConstant, dynamicStates.depthBiasSlope);
                cache.rs.depthBias = dynamicStates.depthBiasConstant;
                cache.rs.depthBiasSlop = dynamicStates.depthBiasSlope;
              }
              break;
            }
          case DynamicStateFlagBit.BLEND_CONSTANTS:
            {
              const blendConstant = dynamicStates.blendConstant;
              if (cache.bs.blendColor.x !== blendConstant.x || cache.bs.blendColor.y !== blendConstant.y || cache.bs.blendColor.z !== blendConstant.z || cache.bs.blendColor.w !== blendConstant.w) {
                gl.blendColor(blendConstant.x, blendConstant.y, blendConstant.z, blendConstant.w);
                cache.bs.blendColor.copy(blendConstant);
              }
              break;
            }
          case DynamicStateFlagBit.STENCIL_WRITE_MASK:
            {
              const front = dynamicStates.stencilStatesFront;
              const back = dynamicStates.stencilStatesBack;
              if (cache.dss.stencilWriteMaskFront !== front.writeMask) {
                gl.stencilMaskSeparate(gl.FRONT, front.writeMask);
                cache.dss.stencilWriteMaskFront = front.writeMask;
              }
              if (cache.dss.stencilWriteMaskBack !== back.writeMask) {
                gl.stencilMaskSeparate(gl.BACK, back.writeMask);
                cache.dss.stencilWriteMaskBack = back.writeMask;
              }
              break;
            }
          case DynamicStateFlagBit.STENCIL_COMPARE_MASK:
            {
              const front = dynamicStates.stencilStatesFront;
              const back = dynamicStates.stencilStatesBack;
              if (cache.dss.stencilRefFront !== front.reference || cache.dss.stencilReadMaskFront !== front.compareMask) {
                gl.stencilFuncSeparate(gl.FRONT, WebGLCmpFuncs[cache.dss.stencilFuncFront], front.reference, front.compareMask);
                cache.dss.stencilRefFront = front.reference;
                cache.dss.stencilReadMaskFront = front.compareMask;
              }
              if (cache.dss.stencilRefBack !== back.reference || cache.dss.stencilReadMaskBack !== back.compareMask) {
                gl.stencilFuncSeparate(gl.BACK, WebGLCmpFuncs[cache.dss.stencilFuncBack], back.reference, back.compareMask);
                cache.dss.stencilRefBack = back.reference;
                cache.dss.stencilReadMaskBack = back.compareMask;
              }
              break;
            }
          default:
        } // switch
      } // for
    } // update dynamic states
  }

  function WebGL2CmdFuncDraw(device, drawInfo) {
    const {
      gl
    } = device;
    const {
      gpuInputAssembler,
      glPrimitive
    } = gfxStateCache;
    const md = device.extensions.WEBGL_multi_draw;
    if (gpuInputAssembler) {
      const indexBuffer = gpuInputAssembler.gpuIndexBuffer;
      if (gpuInputAssembler.gpuIndirectBuffer) {
        const {
          indirects
        } = gpuInputAssembler.gpuIndirectBuffer;
        if (indirects.drawByIndex) {
          for (let j = 0; j < indirects.drawCount; j++) {
            indirects.byteOffsets[j] = indirects.offsets[j] * indexBuffer.stride;
          }
          if (md) {
            if (indirects.instancedDraw) {
              md.multiDrawElementsInstancedWEBGL(glPrimitive, indirects.counts, 0, gpuInputAssembler.glIndexType, indirects.byteOffsets, 0, indirects.instances, 0, indirects.drawCount);
            } else {
              md.multiDrawElementsWEBGL(glPrimitive, indirects.counts, 0, gpuInputAssembler.glIndexType, indirects.byteOffsets, 0, indirects.drawCount);
            }
          } else {
            for (let j = 0; j < indirects.drawCount; j++) {
              if (indirects.instances[j]) {
                gl.drawElementsInstanced(glPrimitive, indirects.counts[j], gpuInputAssembler.glIndexType, indirects.byteOffsets[j], indirects.instances[j]);
              } else {
                gl.drawElements(glPrimitive, indirects.counts[j], gpuInputAssembler.glIndexType, indirects.byteOffsets[j]);
              }
            }
          }
        } else if (md) {
          if (indirects.instancedDraw) {
            md.multiDrawArraysInstancedWEBGL(glPrimitive, indirects.offsets, 0, indirects.counts, 0, indirects.instances, 0, indirects.drawCount);
          } else {
            md.multiDrawArraysWEBGL(glPrimitive, indirects.offsets, 0, indirects.counts, 0, indirects.drawCount);
          }
        } else {
          for (let j = 0; j < indirects.drawCount; j++) {
            if (indirects.instances[j]) {
              gl.drawArraysInstanced(glPrimitive, indirects.offsets[j], indirects.counts[j], indirects.instances[j]);
            } else {
              gl.drawArrays(glPrimitive, indirects.offsets[j], indirects.counts[j]);
            }
          }
        }
      } else if (drawInfo.instanceCount) {
        if (indexBuffer) {
          if (drawInfo.indexCount > 0) {
            const offset = drawInfo.firstIndex * indexBuffer.stride;
            gl.drawElementsInstanced(glPrimitive, drawInfo.indexCount, gpuInputAssembler.glIndexType, offset, drawInfo.instanceCount);
          }
        } else if (drawInfo.vertexCount > 0) {
          gl.drawArraysInstanced(glPrimitive, drawInfo.firstVertex, drawInfo.vertexCount, drawInfo.instanceCount);
        }
      } else if (indexBuffer) {
        if (drawInfo.indexCount > 0) {
          const offset = drawInfo.firstIndex * indexBuffer.stride;
          gl.drawElements(glPrimitive, drawInfo.indexCount, gpuInputAssembler.glIndexType, offset);
        }
      } else if (drawInfo.vertexCount > 0) {
        gl.drawArrays(glPrimitive, drawInfo.firstVertex, drawInfo.vertexCount);
      }
    }
  }
  function WebGL2CmdFuncExecuteCmds(device, cmdPackage) {
    cmdIds.fill(0);
    for (let i = 0; i < cmdPackage.cmds.length; ++i) {
      const cmd = cmdPackage.cmds.array[i];
      const cmdId = cmdIds[cmd]++;
      switch (cmd) {
        case WebGL2Cmd.BEGIN_RENDER_PASS:
          {
            const cmd0 = cmdPackage.beginRenderPassCmds.array[cmdId];
            WebGL2CmdFuncBeginRenderPass(device, cmd0.gpuRenderPass, cmd0.gpuFramebuffer, cmd0.renderArea, cmd0.clearColors, cmd0.clearDepth, cmd0.clearStencil);
            break;
          }
        /*
            case WebGL2Cmd.END_RENDER_PASS: {
                // WebGL 2.0 doesn't support store operation of attachments.
                // StoreOp.Store is the default GL behavior.
                break;
            }
            */
        case WebGL2Cmd.BIND_STATES:
          {
            const cmd2 = cmdPackage.bindStatesCmds.array[cmdId];
            WebGL2CmdFuncBindStates(device, cmd2.gpuPipelineState, cmd2.gpuInputAssembler, cmd2.gpuDescriptorSets, cmd2.dynamicOffsets, cmd2.dynamicStates);
            break;
          }
        case WebGL2Cmd.DRAW:
          {
            const cmd3 = cmdPackage.drawCmds.array[cmdId];
            WebGL2CmdFuncDraw(device, cmd3.drawInfo);
            break;
          }
        case WebGL2Cmd.UPDATE_BUFFER:
          {
            const cmd4 = cmdPackage.updateBufferCmds.array[cmdId];
            WebGL2CmdFuncUpdateBuffer(device, cmd4.gpuBuffer, cmd4.buffer, cmd4.offset, cmd4.size);
            break;
          }
        case WebGL2Cmd.COPY_BUFFER_TO_TEXTURE:
          {
            const cmd5 = cmdPackage.copyBufferToTextureCmds.array[cmdId];
            WebGL2CmdFuncCopyBuffersToTexture(device, cmd5.buffers, cmd5.gpuTexture, cmd5.regions);
            break;
          }
        case WebGL2Cmd.BLIT_TEXTURE:
          {
            const cmd6 = cmdPackage.blitTextureCmds.array[cmdId];
            WebGL2CmdFuncBlitTexture(device, cmd6.srcTexture, cmd6.dstTexture, cmd6.regions, cmd6.filter);
            break;
          }
        default:
      } // switch
    } // for
  }

  function toUseTexImage2D(texImages, regions) {
    if (texImages.length > 1 || regions.length > 1) return false;
    const isVideoElement = texImages[0] instanceof HTMLVideoElement;
    if (isVideoElement) {
      const videoElement = texImages[0];
      const isSameSize = regions[0].texOffset.x === 0 && regions[0].texOffset.y === 0 && regions[0].texExtent.width === videoElement.videoWidth && regions[0].texExtent.height === videoElement.videoHeight;
      return isSameSize;
    }
    return false;
  }
  function WebGL2CmdFuncCopyTexImagesToTexture(device, texImages, gpuTexture, regions) {
    const {
      gl
    } = device;
    const glTexUnit = device.stateCache.glTexUnits[device.stateCache.texUnit];
    if (glTexUnit.glTexture !== gpuTexture.glTexture) {
      gl.bindTexture(gpuTexture.glTarget, gpuTexture.glTexture);
      glTexUnit.glTexture = gpuTexture.glTexture;
    }
    let n = 0;
    let f = 0;
    switch (gpuTexture.glTarget) {
      case gl.TEXTURE_2D:
        {
          if (gpuTexture.flags & TextureFlagBit.MUTABLE_STORAGE || toUseTexImage2D(texImages, regions)) {
            gl.texImage2D(gl.TEXTURE_2D, regions[0].texSubres.mipLevel, gpuTexture.glInternalFmt, regions[0].texExtent.width, regions[0].texExtent.height, 0, gpuTexture.glFormat, gpuTexture.glType, texImages[0]);
          } else {
            for (let k = 0; k < regions.length; k++) {
              const region = regions[k];
              gl.texSubImage2D(gl.TEXTURE_2D, region.texSubres.mipLevel, region.texOffset.x, region.texOffset.y, gpuTexture.glFormat, gpuTexture.glType, texImages[n++]);
            }
          }
          break;
        }
      case gl.TEXTURE_CUBE_MAP:
        {
          for (let k = 0; k < regions.length; k++) {
            const region = regions[k];
            const fcount = region.texSubres.baseArrayLayer + region.texSubres.layerCount;
            for (f = region.texSubres.baseArrayLayer; f < fcount; ++f) {
              gl.texSubImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + f, region.texSubres.mipLevel, region.texOffset.x, region.texOffset.y, gpuTexture.glFormat, gpuTexture.glType, texImages[n++]);
            }
          }
          break;
        }
      default:
        {
          error('Unsupported GL texture type, copy buffer to texture failed.');
        }
    }
    if (gpuTexture.flags & TextureFlagBit.GEN_MIPMAP) {
      gl.generateMipmap(gpuTexture.glTarget);
    }
  }
  function pixelBufferPick(buffer, format, offset, stride, extent) {
    const blockHeight = formatAlignment(format).height;
    const bufferSize = FormatSize(format, extent.width, extent.height, extent.depth);
    const rowStrideSize = FormatSize(format, stride.width, 1, 1);
    const sliceStrideSize = FormatSize(format, stride.width, stride.height, 1);
    const destRowSize = FormatSize(format, extent.width, 1, 1);
    const ArrayBufferCtor = getTypedArrayConstructor(FormatInfos[format]);
    if (stagingBuffer.byteLength < bufferSize) {
      stagingBuffer = new Uint8Array(bufferSize);
    }
    let destOffset = 0;
    let bufferOffset = offset;
    for (let i = 0; i < extent.depth; i++) {
      bufferOffset = offset + sliceStrideSize * i;
      for (let j = 0; j < extent.height; j += blockHeight) {
        stagingBuffer.subarray(destOffset, destOffset + destRowSize).set(new Uint8Array(buffer.buffer, buffer.byteOffset + bufferOffset, destRowSize));
        destOffset += destRowSize;
        bufferOffset += rowStrideSize;
      }
    }
    const length = bufferSize / ArrayBufferCtor.BYTES_PER_ELEMENT;
    assertID(Number.isInteger(length), 9101);
    return new ArrayBufferCtor(stagingBuffer.buffer, 0, length);
  }
  function WebGL2CmdFuncCopyBuffersToTexture(device, buffers, gpuTexture, regions) {
    const {
      gl
    } = device;
    const glTexUnit = device.stateCache.glTexUnits[device.stateCache.texUnit];
    if (glTexUnit.glTexture !== gpuTexture.glTexture) {
      gl.bindTexture(gpuTexture.glTarget, gpuTexture.glTexture);
      glTexUnit.glTexture = gpuTexture.glTexture;
    }
    let n = 0;
    let f = 0;
    const fmtInfo = FormatInfos[gpuTexture.format];
    const ArrayBufferCtor = getTypedArrayConstructor(fmtInfo);
    const {
      isCompressed
    } = fmtInfo;
    const blockSize = formatAlignment(gpuTexture.format);
    const extent = new Extent();
    const offset = new Offset();
    const stride = new Extent();
    switch (gpuTexture.glTarget) {
      case gl.TEXTURE_2D:
        {
          for (let k = 0; k < regions.length; k++) {
            const region = regions[k];
            const mipLevel = region.texSubres.mipLevel;
            offset.x = region.texOffset.x === 0 ? 0 : alignTo(region.texOffset.x, blockSize.width);
            offset.y = region.texOffset.y === 0 ? 0 : alignTo(region.texOffset.y, blockSize.height);
            extent.width = region.texExtent.width < blockSize.width ? region.texExtent.width : alignTo(region.texExtent.width, blockSize.width);
            extent.height = region.texExtent.height < blockSize.height ? region.texExtent.width : alignTo(region.texExtent.height, blockSize.height);
            stride.width = region.buffStride > 0 ? region.buffStride : extent.width;
            stride.height = region.buffTexHeight > 0 ? region.buffTexHeight : extent.height;
            const destWidth = region.texExtent.width + offset.x === gpuTexture.width >> mipLevel ? region.texExtent.width : extent.width;
            const destHeight = region.texExtent.height + offset.y === gpuTexture.height >> mipLevel ? region.texExtent.height : extent.height;
            let pixels;
            const buffer = buffers[n++];
            if (stride.width === extent.width && stride.height === extent.height) {
              const length = FormatSize(gpuTexture.format, destWidth, destHeight, 1) / ArrayBufferCtor.BYTES_PER_ELEMENT;
              assertID(Number.isInteger(length), 9101);
              pixels = new ArrayBufferCtor(buffer.buffer, buffer.byteOffset + region.buffOffset, length);
            } else {
              pixels = pixelBufferPick(buffer, gpuTexture.format, region.buffOffset, stride, extent);
            }
            if (!isCompressed) {
              gl.texSubImage2D(gl.TEXTURE_2D, mipLevel, offset.x, offset.y, destWidth, destHeight, gpuTexture.glFormat, gpuTexture.glType, pixels);
            } else if (gpuTexture.glInternalFmt !== WebGL2EXT.COMPRESSED_RGB_ETC1_WEBGL) {
              gl.compressedTexSubImage2D(gl.TEXTURE_2D, mipLevel, offset.x, offset.y, destWidth, destHeight, gpuTexture.glFormat, pixels);
            } else {
              // WEBGL_compressed_texture_etc1
              gl.compressedTexImage2D(gl.TEXTURE_2D, mipLevel, gpuTexture.glInternalFmt, destWidth, destHeight, 0, pixels);
            }
          }
          break;
        }
      case gl.TEXTURE_2D_ARRAY:
        {
          for (let k = 0; k < regions.length; k++) {
            const region = regions[k];
            const mipLevel = region.texSubres.mipLevel;
            offset.x = region.texOffset.x === 0 ? 0 : alignTo(region.texOffset.x, blockSize.width);
            offset.y = region.texOffset.y === 0 ? 0 : alignTo(region.texOffset.y, blockSize.height);
            extent.width = region.texExtent.width < blockSize.width ? region.texExtent.width : alignTo(region.texExtent.width, blockSize.width);
            extent.height = region.texExtent.height < blockSize.height ? region.texExtent.width : alignTo(region.texExtent.height, blockSize.height);
            extent.depth = 1;
            stride.width = region.buffStride > 0 ? region.buffStride : extent.width;
            stride.height = region.buffTexHeight > 0 ? region.buffTexHeight : extent.height;
            const destWidth = region.texExtent.width + offset.x === gpuTexture.width >> mipLevel ? region.texExtent.width : extent.width;
            const destHeight = region.texExtent.height + offset.y === gpuTexture.height >> mipLevel ? region.texExtent.height : extent.height;
            const fcount = region.texSubres.baseArrayLayer + region.texSubres.layerCount;
            for (f = region.texSubres.baseArrayLayer; f < fcount; ++f) {
              offset.z = f;
              let pixels;
              const buffer = buffers[n++];
              if (stride.width === extent.width && stride.height === extent.height) {
                const length = FormatSize(gpuTexture.format, destWidth, destHeight, 1) / ArrayBufferCtor.BYTES_PER_ELEMENT;
                assertID(Number.isInteger(length), 9101);
                pixels = new ArrayBufferCtor(buffer.buffer, buffer.byteOffset + region.buffOffset, length);
              } else {
                pixels = pixelBufferPick(buffer, gpuTexture.format, region.buffOffset, stride, extent);
              }
              if (!isCompressed) {
                gl.texSubImage3D(gl.TEXTURE_2D_ARRAY, mipLevel, offset.x, offset.y, offset.z, destWidth, destHeight, extent.depth, gpuTexture.glFormat, gpuTexture.glType, pixels);
              } else if (gpuTexture.glInternalFmt !== WebGL2EXT.COMPRESSED_RGB_ETC1_WEBGL) {
                gl.compressedTexSubImage3D(gl.TEXTURE_2D_ARRAY, mipLevel, offset.x, offset.y, offset.z, destWidth, destHeight, extent.depth, gpuTexture.glFormat, pixels);
              } else {
                // WEBGL_compressed_texture_etc1
                gl.compressedTexImage3D(gl.TEXTURE_2D_ARRAY, mipLevel, gpuTexture.glInternalFmt, destWidth, destHeight, extent.depth, 0, pixels);
              }
            }
          }
          break;
        }
      case gl.TEXTURE_3D:
        {
          for (let k = 0; k < regions.length; k++) {
            const region = regions[k];
            const mipLevel = region.texSubres.mipLevel;
            offset.x = region.texOffset.x === 0 ? 0 : alignTo(region.texOffset.x, blockSize.width);
            offset.y = region.texOffset.y === 0 ? 0 : alignTo(region.texOffset.y, blockSize.height);
            offset.z = region.texOffset.z;
            extent.width = region.texExtent.width < blockSize.width ? region.texExtent.width : alignTo(region.texExtent.width, blockSize.width);
            extent.height = region.texExtent.height < blockSize.height ? region.texExtent.width : alignTo(region.texExtent.height, blockSize.height);
            extent.depth = region.texExtent.depth;
            stride.width = region.buffStride > 0 ? region.buffStride : extent.width;
            stride.height = region.buffTexHeight > 0 ? region.buffTexHeight : extent.height;
            const destWidth = region.texExtent.width + offset.x === gpuTexture.width >> mipLevel ? region.texExtent.width : extent.width;
            const destHeight = region.texExtent.height + offset.y === gpuTexture.height >> mipLevel ? region.texExtent.height : extent.height;
            let pixels;
            const buffer = buffers[n++];
            if (stride.width === extent.width && stride.height === extent.height) {
              const length = FormatSize(gpuTexture.format, destWidth, destHeight, extent.depth) / ArrayBufferCtor.BYTES_PER_ELEMENT;
              assertID(Number.isInteger(length), 9101);
              pixels = new ArrayBufferCtor(buffer.buffer, buffer.byteOffset + region.buffOffset, length);
            } else {
              pixels = pixelBufferPick(buffer, gpuTexture.format, region.buffOffset, stride, extent);
            }
            if (!isCompressed) {
              gl.texSubImage3D(gl.TEXTURE_2D_ARRAY, mipLevel, offset.x, offset.y, offset.z, destWidth, destHeight, extent.depth, gpuTexture.glFormat, gpuTexture.glType, pixels);
            } else if (gpuTexture.glInternalFmt !== WebGL2EXT.COMPRESSED_RGB_ETC1_WEBGL) {
              gl.compressedTexSubImage3D(gl.TEXTURE_2D_ARRAY, mipLevel, offset.x, offset.y, offset.z, destWidth, destHeight, extent.depth, gpuTexture.glFormat, pixels);
            } else {
              // WEBGL_compressed_texture_etc1
              gl.compressedTexImage3D(gl.TEXTURE_2D_ARRAY, mipLevel, gpuTexture.glInternalFmt, destWidth, destHeight, extent.depth, 0, pixels);
            }
          }
          break;
        }
      case gl.TEXTURE_CUBE_MAP:
        {
          for (let k = 0; k < regions.length; k++) {
            const region = regions[k];
            const mipLevel = region.texSubres.mipLevel;
            offset.x = region.texOffset.x === 0 ? 0 : alignTo(region.texOffset.x, blockSize.width);
            offset.y = region.texOffset.y === 0 ? 0 : alignTo(region.texOffset.y, blockSize.height);
            extent.width = region.texExtent.width < blockSize.width ? region.texExtent.width : alignTo(region.texExtent.width, blockSize.width);
            extent.height = region.texExtent.height < blockSize.height ? region.texExtent.width : alignTo(region.texExtent.height, blockSize.height);
            stride.width = region.buffStride > 0 ? region.buffStride : extent.width;
            stride.height = region.buffTexHeight > 0 ? region.buffTexHeight : extent.height;
            const destWidth = region.texExtent.width + offset.x === gpuTexture.width >> mipLevel ? region.texExtent.width : extent.width;
            const destHeight = region.texExtent.height + offset.y === gpuTexture.height >> mipLevel ? region.texExtent.height : extent.height;
            const fcount = region.texSubres.baseArrayLayer + region.texSubres.layerCount;
            for (f = region.texSubres.baseArrayLayer; f < fcount; ++f) {
              let pixels;
              const buffer = buffers[n++];
              if (stride.width === extent.width && stride.height === extent.height) {
                const length = FormatSize(gpuTexture.format, destWidth, destHeight, 1) / ArrayBufferCtor.BYTES_PER_ELEMENT;
                assertID(Number.isInteger(length), 9101);
                pixels = new ArrayBufferCtor(buffer.buffer, buffer.byteOffset + region.buffOffset, length);
              } else {
                pixels = pixelBufferPick(buffer, gpuTexture.format, region.buffOffset, stride, extent);
              }
              if (!isCompressed) {
                gl.texSubImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + f, mipLevel, offset.x, offset.y, destWidth, destHeight, gpuTexture.glFormat, gpuTexture.glType, pixels);
              } else if (gpuTexture.glInternalFmt !== WebGL2EXT.COMPRESSED_RGB_ETC1_WEBGL) {
                gl.compressedTexSubImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + f, mipLevel, offset.x, offset.y, destWidth, destHeight, gpuTexture.glFormat, pixels);
              } else {
                // WEBGL_compressed_texture_etc1
                gl.compressedTexImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + f, mipLevel, gpuTexture.glInternalFmt, destWidth, destHeight, 0, pixels);
              }
            }
          }
          break;
        }
      default:
        {
          error('Unsupported GL texture type, copy buffer to texture failed.');
        }
    }
    if (gpuTexture.flags & TextureFlagBit.GEN_MIPMAP) {
      gl.generateMipmap(gpuTexture.glTarget);
    }
  }
  function WebGL2CmdFuncCopyTextureToBuffers(device, gpuTexture, buffers, regions) {
    const {
      gl
    } = device;
    const cache = device.stateCache;
    const framebuffer = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
    let x = 0;
    let y = 0;
    let w = 1;
    let h = 1;
    switch (gpuTexture.glTarget) {
      case gl.TEXTURE_2D:
        {
          for (let k = 0; k < regions.length; k++) {
            const region = regions[k];
            gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gpuTexture.glTarget, gpuTexture.glTexture, region.texSubres.mipLevel);
            x = region.texOffset.x;
            y = region.texOffset.y;
            w = region.texExtent.width;
            h = region.texExtent.height;
            gl.readPixels(x, y, w, h, gpuTexture.glFormat, gpuTexture.glType, buffers[k]);
          }
          break;
        }
      default:
        {
          error('Unsupported GL texture type, copy texture to buffers failed.');
        }
    }
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    cache.glFramebuffer = null;
    gl.deleteFramebuffer(framebuffer);
  }
  function WebGL2CmdFuncBlitFramebuffer(device, src, dst, srcRect, dstRect, filter) {
    const {
      gl
    } = device;
    if (device.stateCache.glReadFramebuffer !== src.glFramebuffer) {
      gl.bindFramebuffer(gl.READ_FRAMEBUFFER, src.glFramebuffer);
      device.stateCache.glReadFramebuffer = src.glFramebuffer;
    }
    const rebindFBO = dst.glFramebuffer !== device.stateCache.glFramebuffer;
    if (rebindFBO) {
      gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, dst.glFramebuffer);
    }
    let mask = 0;
    if (src.gpuColorViews.length > 0) {
      mask |= gl.COLOR_BUFFER_BIT;
    }
    if (src.gpuDepthStencilView) {
      mask |= gl.DEPTH_BUFFER_BIT;
      if (FormatInfos[src.gpuDepthStencilView.gpuTexture.format].hasStencil) {
        mask |= gl.STENCIL_BUFFER_BIT;
      }
    }
    const glFilter = filter === Filter.LINEAR || filter === Filter.ANISOTROPIC ? gl.LINEAR : gl.NEAREST;
    gl.blitFramebuffer(srcRect.x, srcRect.y, srcRect.x + srcRect.width, srcRect.y + srcRect.height, dstRect.x, dstRect.y, dstRect.x + dstRect.width, dstRect.y + dstRect.height, mask, glFilter);
    if (rebindFBO) {
      gl.bindFramebuffer(gl.FRAMEBUFFER, device.stateCache.glFramebuffer);
    }
  }
  function WebGL2CmdFuncBlitTexture(device, src, dst, regions, filter) {
    const {
      gl
    } = device;
    const cache = device.stateCache;
    const blitManager = device.blitManager;
    if (!blitManager) {
      return;
    }

    // logic different from native, because framebuffer-map is not implemented in webgl2
    const glFilter = filter === Filter.LINEAR || filter === Filter.ANISOTROPIC ? gl.LINEAR : gl.NEAREST;
    const srcFramebuffer = blitManager.srcFramebuffer;
    const dstFramebuffer = blitManager.dstFramebuffer;
    const origReadFBO = cache.glReadFramebuffer;
    const origDrawFBO = cache.glFramebuffer;
    let srcMip = regions[0].srcSubres.mipLevel;
    let dstMip = regions[0].dstSubres.mipLevel;
    const blitInfo = formatInfo => {
      let mask = 0;
      let attachment = gl.COLOR_ATTACHMENT0;
      if (formatInfo.hasStencil) {
        attachment = gl.DEPTH_STENCIL_ATTACHMENT;
      } else if (formatInfo.hasDepth) {
        attachment = gl.DEPTH_ATTACHMENT;
      }
      if (formatInfo.hasDepth || formatInfo.hasStencil) {
        if (formatInfo.hasDepth) {
          mask |= gl.DEPTH_BUFFER_BIT;
        }
        if (formatInfo.hasStencil) {
          mask |= gl.STENCIL_BUFFER_BIT;
        }
      } else {
        mask |= gl.COLOR_BUFFER_BIT;
      }
      return {
        mask,
        attachment
      };
    };
    const regionIndices = regions.map((_, i) => i);
    regionIndices.sort((a, b) => regions[a].srcSubres.mipLevel - regions[b].srcSubres.mipLevel);
    const {
      mask: srcMask,
      attachment: srcAttachment
    } = blitInfo(FormatInfos[src.format]);
    const {
      mask: dstMask,
      attachment: dstAttachment
    } = blitInfo(FormatInfos[dst.format]);
    if (cache.glReadFramebuffer !== srcFramebuffer) {
      gl.bindFramebuffer(gl.READ_FRAMEBUFFER, srcFramebuffer);
      cache.glReadFramebuffer = srcFramebuffer;
    }
    if (cache.glFramebuffer !== dstFramebuffer) {
      gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, dstFramebuffer);
      cache.glFramebuffer = dstFramebuffer;
    }
    if (src.glTexture) {
      gl.framebufferTexture2D(gl.READ_FRAMEBUFFER, srcAttachment, src.glTarget, src.glTexture, srcMip);
    } else {
      gl.framebufferRenderbuffer(gl.READ_FRAMEBUFFER, srcAttachment, gl.RENDERBUFFER, src.glRenderbuffer);
    }
    if (dst.glTexture) {
      gl.framebufferTexture2D(gl.DRAW_FRAMEBUFFER, dstAttachment, dst.glTarget, dst.glTexture, dstMip);
    } else {
      gl.framebufferRenderbuffer(gl.DRAW_FRAMEBUFFER, dstAttachment, gl.RENDERBUFFER, dst.glRenderbuffer);
    }
    for (let i = 0; i < regionIndices.length; i++) {
      const region = regions[regionIndices[i]];
      if (src.glTexture && srcMip !== region.srcSubres.mipLevel) {
        srcMip = region.srcSubres.mipLevel;
        gl.framebufferTexture2D(gl.READ_FRAMEBUFFER, srcAttachment, src.glTarget, src.glTexture, srcMip);
      }
      if (dst.glTexture && dstMip !== region.dstSubres.mipLevel) {
        dstMip = region.dstSubres.mipLevel;
        gl.framebufferTexture2D(gl.DRAW_FRAMEBUFFER, dstAttachment, dst.glTarget, dst.glTexture, dstMip);
      }
      gl.blitFramebuffer(region.srcOffset.x, region.srcOffset.y, region.srcOffset.x + region.srcExtent.width, region.srcOffset.y + region.srcExtent.height, region.dstOffset.x, region.dstOffset.y, region.dstOffset.x + region.dstExtent.width, region.dstOffset.y + region.dstExtent.height, srcMask, glFilter);
    }

    // restore fbo state
    if (cache.glReadFramebuffer !== origReadFBO) {
      gl.bindFramebuffer(gl.READ_FRAMEBUFFER, origReadFBO);
      cache.glReadFramebuffer = origReadFBO;
    }
    if (cache.glFramebuffer !== origDrawFBO) {
      gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, origDrawFBO);
      cache.glFramebuffer = origDrawFBO;
    }
  }
  _export({
    GFXFormatToWebGLType: GFXFormatToWebGLType,
    GFXFormatToWebGLInternalFormat: GFXFormatToWebGLInternalFormat,
    GFXFormatToWebGLFormat: GFXFormatToWebGLFormat,
    WebGL2CmdObject: void 0,
    WebGL2CmdBeginRenderPass: void 0,
    WebGL2CmdBindStates: void 0,
    WebGL2CmdDraw: void 0,
    WebGL2CmdUpdateBuffer: void 0,
    WebGL2CmdCopyBufferToTexture: void 0,
    WebGL2CmdBlitTexture: void 0,
    WebGL2CmdPackage: void 0,
    WebGL2CmdFuncCreateBuffer: WebGL2CmdFuncCreateBuffer,
    WebGL2CmdFuncDestroyBuffer: WebGL2CmdFuncDestroyBuffer,
    WebGL2CmdFuncResizeBuffer: WebGL2CmdFuncResizeBuffer,
    WebGL2CmdFuncUpdateBuffer: WebGL2CmdFuncUpdateBuffer,
    WebGL2CmdFuncCreateTexture: WebGL2CmdFuncCreateTexture,
    WebGL2CmdFuncDestroyTexture: WebGL2CmdFuncDestroyTexture,
    WebGL2CmdFuncResizeTexture: WebGL2CmdFuncResizeTexture,
    WebGL2CmdFuncPrepareSamplerInfo: WebGL2CmdFuncPrepareSamplerInfo,
    WebGL2CmdFuncDestroySampler: WebGL2CmdFuncDestroySampler,
    WebGL2CmdFuncCreateFramebuffer: WebGL2CmdFuncCreateFramebuffer,
    WebGL2CmdFuncDestroyFramebuffer: WebGL2CmdFuncDestroyFramebuffer,
    WebGL2CmdFuncCreateShader: WebGL2CmdFuncCreateShader,
    WebGL2CmdFuncDestroyShader: WebGL2CmdFuncDestroyShader,
    WebGL2CmdFuncCreateInputAssember: WebGL2CmdFuncCreateInputAssember,
    WebGL2CmdFuncDestroyInputAssembler: WebGL2CmdFuncDestroyInputAssembler,
    WebGL2CmdFuncBeginRenderPass: WebGL2CmdFuncBeginRenderPass,
    WebGL2CmdFuncBindStates: WebGL2CmdFuncBindStates,
    WebGL2CmdFuncDraw: WebGL2CmdFuncDraw,
    WebGL2CmdFuncExecuteCmds: WebGL2CmdFuncExecuteCmds,
    WebGL2CmdFuncCopyTexImagesToTexture: WebGL2CmdFuncCopyTexImagesToTexture,
    WebGL2CmdFuncCopyBuffersToTexture: WebGL2CmdFuncCopyBuffersToTexture,
    WebGL2CmdFuncCopyTextureToBuffers: WebGL2CmdFuncCopyTextureToBuffers,
    WebGL2CmdFuncBlitFramebuffer: WebGL2CmdFuncBlitFramebuffer,
    WebGL2CmdFuncBlitTexture: WebGL2CmdFuncBlitTexture,
    WebGL2Cmd: void 0
  });
  return {
    setters: [function (_baseDefineJs) {
      BufferUsageBit = _baseDefineJs.BufferUsageBit;
      ColorMask = _baseDefineJs.ColorMask;
      CullMode = _baseDefineJs.CullMode;
      DynamicStateFlagBit = _baseDefineJs.DynamicStateFlagBit;
      Filter = _baseDefineJs.Filter;
      Format = _baseDefineJs.Format;
      TextureType = _baseDefineJs.TextureType;
      Type = _baseDefineJs.Type;
      FormatInfos = _baseDefineJs.FormatInfos;
      FormatSize = _baseDefineJs.FormatSize;
      LoadOp = _baseDefineJs.LoadOp;
      MemoryUsageBit = _baseDefineJs.MemoryUsageBit;
      SampleCount = _baseDefineJs.SampleCount;
      ShaderStageFlagBit = _baseDefineJs.ShaderStageFlagBit;
      TextureFlagBit = _baseDefineJs.TextureFlagBit;
      Rect = _baseDefineJs.Rect;
      DrawInfo = _baseDefineJs.DrawInfo;
      DynamicStates = _baseDefineJs.DynamicStates;
      UniformSamplerTexture = _baseDefineJs.UniformSamplerTexture;
      alignTo = _baseDefineJs.alignTo;
      Extent = _baseDefineJs.Extent;
      formatAlignment = _baseDefineJs.formatAlignment;
      getTypedArrayConstructor = _baseDefineJs.getTypedArrayConstructor;
      Offset = _baseDefineJs.Offset;
    }, function (_webgl2DefineJs) {
      WebGL2EXT = _webgl2DefineJs.WebGL2EXT;
    }, function (_coreIndexJs) {
      CachedArray = _coreIndexJs.CachedArray;
      error = _coreIndexJs.error;
      errorID = _coreIndexJs.errorID;
      debug = _coreIndexJs.debug;
      cclegacy = _coreIndexJs.cclegacy;
      assertID = _coreIndexJs.assertID;
    }],
    execute: function () {
      WebGLWraps = [0x2901,
      // WebGLRenderingContext.REPEAT
      0x8370,
      // WebGLRenderingContext.MIRRORED_REPEAT
      0x812F,
      // WebGLRenderingContext.CLAMP_TO_EDGE
      0x812F // WebGLRenderingContext.CLAMP_TO_EDGE
      ];
      _f32v4 = new Float32Array(4);
      WebGLCmpFuncs = [0x0200,
      // WebGLRenderingContext.NEVER,
      0x0201,
      // WebGLRenderingContext.LESS,
      0x0202,
      // WebGLRenderingContext.EQUAL,
      0x0203,
      // WebGLRenderingContext.LEQUAL,
      0x0204,
      // WebGLRenderingContext.GREATER,
      0x0205,
      // WebGLRenderingContext.NOTEQUAL,
      0x0206,
      // WebGLRenderingContext.GEQUAL,
      0x0207 // WebGLRenderingContext.ALWAYS,
      ];
      WebGLStencilOps = [0x0000,
      // WebGLRenderingContext.ZERO,
      0x1E00,
      // WebGLRenderingContext.KEEP,
      0x1E01,
      // WebGLRenderingContext.REPLACE,
      0x1E02,
      // WebGLRenderingContext.INCR,
      0x1E03,
      // WebGLRenderingContext.DECR,
      0x150A,
      // WebGLRenderingContext.INVERT,
      0x8507,
      // WebGLRenderingContext.INCR_WRAP,
      0x8508 // WebGLRenderingContext.DECR_WRAP,
      ];
      WebGLBlendOps = [0x8006,
      // WebGLRenderingContext.FUNC_ADD,
      0x800A,
      // WebGLRenderingContext.FUNC_SUBTRACT,
      0x800B,
      // WebGLRenderingContext.FUNC_REVERSE_SUBTRACT,
      0x8007,
      // WebGL2RenderingContext.MIN,
      0x8008 // WebGL2RenderingContext.MAX,
      ];
      WebGLBlendFactors = [0x0000,
      // WebGLRenderingContext.ZERO,
      0x0001,
      // WebGLRenderingContext.ONE,
      0x0302,
      // WebGLRenderingContext.SRC_ALPHA,
      0x0304,
      // WebGLRenderingContext.DST_ALPHA,
      0x0303,
      // WebGLRenderingContext.ONE_MINUS_SRC_ALPHA,
      0x0305,
      // WebGLRenderingContext.ONE_MINUS_DST_ALPHA,
      0x0300,
      // WebGLRenderingContext.SRC_COLOR,
      0x0306,
      // WebGLRenderingContext.DST_COLOR,
      0x0301,
      // WebGLRenderingContext.ONE_MINUS_SRC_COLOR,
      0x0307,
      // WebGLRenderingContext.ONE_MINUS_DST_COLOR,
      0x0308,
      // WebGLRenderingContext.SRC_ALPHA_SATURATE,
      0x8001,
      // WebGLRenderingContext.CONSTANT_COLOR,
      0x8002,
      // WebGLRenderingContext.ONE_MINUS_CONSTANT_COLOR,
      0x8003,
      // WebGLRenderingContext.CONSTANT_ALPHA,
      0x8004 // WebGLRenderingContext.ONE_MINUS_CONSTANT_ALPHA,
      ];
      (function (WebGL2Cmd) {
        WebGL2Cmd[WebGL2Cmd["BEGIN_RENDER_PASS"] = 0] = "BEGIN_RENDER_PASS";
        WebGL2Cmd[WebGL2Cmd["END_RENDER_PASS"] = 1] = "END_RENDER_PASS";
        WebGL2Cmd[WebGL2Cmd["BIND_STATES"] = 2] = "BIND_STATES";
        WebGL2Cmd[WebGL2Cmd["DRAW"] = 3] = "DRAW";
        WebGL2Cmd[WebGL2Cmd["UPDATE_BUFFER"] = 4] = "UPDATE_BUFFER";
        WebGL2Cmd[WebGL2Cmd["COPY_BUFFER_TO_TEXTURE"] = 5] = "COPY_BUFFER_TO_TEXTURE";
        WebGL2Cmd[WebGL2Cmd["BLIT_TEXTURE"] = 6] = "BLIT_TEXTURE";
        WebGL2Cmd[WebGL2Cmd["COUNT"] = 7] = "COUNT";
      })(WebGL2Cmd || _export("WebGL2Cmd", WebGL2Cmd = {}));
      _export("WebGL2CmdObject", WebGL2CmdObject = class WebGL2CmdObject {
        constructor(type) {
          this.cmdType = void 0;
          this.refCount = 0;
          this.cmdType = type;
        }
      });
      _export("WebGL2CmdBeginRenderPass", WebGL2CmdBeginRenderPass = class WebGL2CmdBeginRenderPass extends WebGL2CmdObject {
        constructor() {
          super(WebGL2Cmd.BEGIN_RENDER_PASS);
          this.gpuRenderPass = null;
          this.gpuFramebuffer = null;
          this.renderArea = new Rect();
          this.clearColors = [];
          this.clearDepth = 1.0;
          this.clearStencil = 0;
        }
        clear() {
          this.gpuFramebuffer = null;
          this.clearColors.length = 0;
        }
      });
      _export("WebGL2CmdBindStates", WebGL2CmdBindStates = class WebGL2CmdBindStates extends WebGL2CmdObject {
        constructor() {
          super(WebGL2Cmd.BIND_STATES);
          this.gpuPipelineState = null;
          this.gpuInputAssembler = null;
          this.gpuDescriptorSets = [];
          this.dynamicOffsets = [];
          this.dynamicStates = new DynamicStates();
        }
        clear() {
          this.gpuPipelineState = null;
          this.gpuInputAssembler = null;
          this.gpuDescriptorSets.length = 0;
          this.dynamicOffsets.length = 0;
        }
      });
      _export("WebGL2CmdDraw", WebGL2CmdDraw = class WebGL2CmdDraw extends WebGL2CmdObject {
        constructor() {
          super(WebGL2Cmd.DRAW);
          this.drawInfo = new DrawInfo();
        }
        clear() {
          // noop
        }
      });
      _export("WebGL2CmdUpdateBuffer", WebGL2CmdUpdateBuffer = class WebGL2CmdUpdateBuffer extends WebGL2CmdObject {
        constructor() {
          super(WebGL2Cmd.UPDATE_BUFFER);
          this.gpuBuffer = null;
          this.buffer = null;
          this.offset = 0;
          this.size = 0;
        }
        clear() {
          this.gpuBuffer = null;
          this.buffer = null;
        }
      });
      _export("WebGL2CmdCopyBufferToTexture", WebGL2CmdCopyBufferToTexture = class WebGL2CmdCopyBufferToTexture extends WebGL2CmdObject {
        constructor() {
          super(WebGL2Cmd.COPY_BUFFER_TO_TEXTURE);
          this.gpuTexture = null;
          this.buffers = [];
          this.regions = [];
        }
        clear() {
          this.gpuTexture = null;
          this.buffers.length = 0;
          this.regions.length = 0;
        }
      });
      _export("WebGL2CmdBlitTexture", WebGL2CmdBlitTexture = class WebGL2CmdBlitTexture extends WebGL2CmdObject {
        constructor() {
          super(WebGL2Cmd.BLIT_TEXTURE);
          this.srcTexture = null;
          this.dstTexture = null;
          this.regions = [];
          this.filter = Filter.LINEAR;
        }
        clear() {
          this.srcTexture = null;
          this.dstTexture = null;
          this.regions.length = 0;
        }
      });
      _export("WebGL2CmdPackage", WebGL2CmdPackage = class WebGL2CmdPackage {
        constructor() {
          this.cmds = new CachedArray(1);
          this.beginRenderPassCmds = new CachedArray(1);
          this.bindStatesCmds = new CachedArray(1);
          this.drawCmds = new CachedArray(1);
          this.updateBufferCmds = new CachedArray(1);
          this.copyBufferToTextureCmds = new CachedArray(1);
          this.blitTextureCmds = new CachedArray(1);
        }
        clearCmds(allocator) {
          if (this.beginRenderPassCmds.length) {
            allocator.beginRenderPassCmdPool.freeCmds(this.beginRenderPassCmds);
            this.beginRenderPassCmds.clear();
          }
          if (this.bindStatesCmds.length) {
            allocator.bindStatesCmdPool.freeCmds(this.bindStatesCmds);
            this.bindStatesCmds.clear();
          }
          if (this.drawCmds.length) {
            allocator.drawCmdPool.freeCmds(this.drawCmds);
            this.drawCmds.clear();
          }
          if (this.updateBufferCmds.length) {
            allocator.updateBufferCmdPool.freeCmds(this.updateBufferCmds);
            this.updateBufferCmds.clear();
          }
          if (this.copyBufferToTextureCmds.length) {
            allocator.copyBufferToTextureCmdPool.freeCmds(this.copyBufferToTextureCmds);
            this.copyBufferToTextureCmds.clear();
          }
          if (this.blitTextureCmds.length) {
            allocator.blitTextureCmdPool.freeCmds(this.blitTextureCmds);
            this.blitTextureCmds.clear();
          }
          this.cmds.clear();
        }
      });
      gfxStateCache = {
        gpuPipelineState: null,
        gpuInputAssembler: null,
        glPrimitive: 0,
        invalidateAttachments: []
      };
      cmdIds = new Array(WebGL2Cmd.COUNT);
      stagingBuffer = new Uint8Array(1);
    }
  };
});