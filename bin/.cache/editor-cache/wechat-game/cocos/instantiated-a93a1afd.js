System.register(["./wasm-minigame-c1b4b430.js","./index-92d00b49.js","./deprecated-8cbcc834.js","./director-44a98d9f.js"],(function(e,t){"use strict";var l,a,n,r,i;return{setters:[function(e){l=e.e,a=e.i},function(e){n=e.a,r=e.e},function(e){i=e.g},function(){}],execute:function(){var o,s,u;e("w",B),e("E",o),function(e){e[e.EBulletTypeVec3=0]="EBulletTypeVec3",e[e.EBulletTypeQuat=1]="EBulletTypeQuat",e[e.EBulletTypeTransform=2]="EBulletTypeTransform",e[e.EBulletTypeMotionState=3]="EBulletTypeMotionState",e[e.EBulletTypeCollisionObject=4]="EBulletTypeCollisionObject",e[e.EBulletTypeCollisionShape=5]="EBulletTypeCollisionShape",e[e.EBulletTypeCharacterController=6]="EBulletTypeCharacterController",e[e.EBulletTypeStridingMeshInterface=7]="EBulletTypeStridingMeshInterface",e[e.EBulletTypeTriangleMesh=8]="EBulletTypeTriangleMesh",e[e.EBulletTypeCollisionDispatcher=9]="EBulletTypeCollisionDispatcher",e[e.EBulletTypeDbvtBroadPhase=10]="EBulletTypeDbvtBroadPhase",e[e.EBulletTypeSequentialImpulseConstraintSolver=11]="EBulletTypeSequentialImpulseConstraintSolver",e[e.EBulletTypeCollisionWorld=12]="EBulletTypeCollisionWorld",e[e.EBulletTypeTypedConstraint=13]="EBulletTypeTypedConstraint",e[e.EBulletTypeDebugDraw=14]="EBulletTypeDebugDraw"}(o||e("E",o={})),e("d",s),function(e){e[e.NONE=0]="NONE",e[e.FilterBackfaces=1]="FilterBackfaces",e[e.KeepUnflippedNormal=2]="KeepUnflippedNormal",e[e.UseSubSimplexConvexCastRaytest=4]="UseSubSimplexConvexCastRaytest",e[e.UseGjkConvexCastRaytest=8]="UseGjkConvexCastRaytest"}(s||e("d",s={})),e("c",u),function(e){e[e.DBG_NoDebug=0]="DBG_NoDebug",e[e.DBG_DrawWireframe=1]="DBG_DrawWireframe",e[e.DBG_DrawAabb=2]="DBG_DrawAabb",e[e.DBG_DrawFeaturesText=4]="DBG_DrawFeaturesText",e[e.DBG_DrawContactPoints=8]="DBG_DrawContactPoints",e[e.DBG_NoDeactivation=16]="DBG_NoDeactivation",e[e.DBG_NoHelpText=32]="DBG_NoHelpText",e[e.DBG_DrawText=64]="DBG_DrawText",e[e.DBG_ProfileTimings=128]="DBG_ProfileTimings",e[e.DBG_EnableSatComparison=256]="DBG_EnableSatComparison",e[e.DBG_DisableBulletLCP=512]="DBG_DisableBulletLCP",e[e.DBG_EnableCCD=1024]="DBG_EnableCCD",e[e.DBG_DrawConstraints=2048]="DBG_DrawConstraints",e[e.DBG_DrawConstraintLimits=4096]="DBG_DrawConstraintLimits",e[e.DBG_FastWireframe=8192]="DBG_FastWireframe",e[e.DBG_DrawNormals=16384]="DBG_DrawNormals",e[e.DBG_DrawFrames=32768]="DBG_DrawFrames",e[e.DBG_MAX_DEBUG_DRAW_MODE=32769]="DBG_MAX_DEBUG_DRAW_MODE"}(u||e("c",u={})),e("b",{});var D=e("a",{});function B(){return l().then((function(){return Promise.all([t.import("./bullet.release.wasm-d6c4a6fc.js"),t.import("./bullet.release.wasm-e702f478.js")]).then((function(t){var l,r,i=t[0].default,o=t[1].default;return l=i,r=o,new Promise((function(t,i){var o=function(e){return"[bullet]: bullet wasm lib load failed: "+e};l({instantiateWasm:function(e,t){a(r,e).then((function(e){t(e.instance,e.module)})).catch((function(e){return i(o(e))}))}}).then((function(t){n("[bullet]:bullet wasm lib loaded."),e("b",t)})).then(t).catch((function(e){return i(o(e))}))}))}))})).catch((function(e){r(e)}))}D.BODY_CACHE_NAME="body",D.CCT_CACHE_NAME="cct",i.onPostInfrastructureInitDelegate.add(B)}}}));