System.register(["./wasm-minigame-04dca4c4.js","./index-433d8403.js","./deprecated-48c82c8e.js","./director-c293a59c.js"],(function(e,t){"use strict";var l,a,n,r;return{setters:[function(e){l=e.e,e.i},function(e){a=e.a,n=e.e},function(e){r=e.g},function(){}],execute:function(){var i,o,s;e("w",B),e("E",i),function(e){e[e.EBulletTypeVec3=0]="EBulletTypeVec3",e[e.EBulletTypeQuat=1]="EBulletTypeQuat",e[e.EBulletTypeTransform=2]="EBulletTypeTransform",e[e.EBulletTypeMotionState=3]="EBulletTypeMotionState",e[e.EBulletTypeCollisionObject=4]="EBulletTypeCollisionObject",e[e.EBulletTypeCollisionShape=5]="EBulletTypeCollisionShape",e[e.EBulletTypeCharacterController=6]="EBulletTypeCharacterController",e[e.EBulletTypeStridingMeshInterface=7]="EBulletTypeStridingMeshInterface",e[e.EBulletTypeTriangleMesh=8]="EBulletTypeTriangleMesh",e[e.EBulletTypeCollisionDispatcher=9]="EBulletTypeCollisionDispatcher",e[e.EBulletTypeDbvtBroadPhase=10]="EBulletTypeDbvtBroadPhase",e[e.EBulletTypeSequentialImpulseConstraintSolver=11]="EBulletTypeSequentialImpulseConstraintSolver",e[e.EBulletTypeCollisionWorld=12]="EBulletTypeCollisionWorld",e[e.EBulletTypeTypedConstraint=13]="EBulletTypeTypedConstraint",e[e.EBulletTypeDebugDraw=14]="EBulletTypeDebugDraw"}(i||e("E",i={})),e("d",o),function(e){e[e.NONE=0]="NONE",e[e.FilterBackfaces=1]="FilterBackfaces",e[e.KeepUnflippedNormal=2]="KeepUnflippedNormal",e[e.UseSubSimplexConvexCastRaytest=4]="UseSubSimplexConvexCastRaytest",e[e.UseGjkConvexCastRaytest=8]="UseGjkConvexCastRaytest"}(o||e("d",o={})),e("c",s),function(e){e[e.DBG_NoDebug=0]="DBG_NoDebug",e[e.DBG_DrawWireframe=1]="DBG_DrawWireframe",e[e.DBG_DrawAabb=2]="DBG_DrawAabb",e[e.DBG_DrawFeaturesText=4]="DBG_DrawFeaturesText",e[e.DBG_DrawContactPoints=8]="DBG_DrawContactPoints",e[e.DBG_NoDeactivation=16]="DBG_NoDeactivation",e[e.DBG_NoHelpText=32]="DBG_NoHelpText",e[e.DBG_DrawText=64]="DBG_DrawText",e[e.DBG_ProfileTimings=128]="DBG_ProfileTimings",e[e.DBG_EnableSatComparison=256]="DBG_EnableSatComparison",e[e.DBG_DisableBulletLCP=512]="DBG_DisableBulletLCP",e[e.DBG_EnableCCD=1024]="DBG_EnableCCD",e[e.DBG_DrawConstraints=2048]="DBG_DrawConstraints",e[e.DBG_DrawConstraintLimits=4096]="DBG_DrawConstraintLimits",e[e.DBG_FastWireframe=8192]="DBG_FastWireframe",e[e.DBG_DrawNormals=16384]="DBG_DrawNormals",e[e.DBG_DrawFrames=32768]="DBG_DrawFrames",e[e.DBG_MAX_DEBUG_DRAW_MODE=32769]="DBG_MAX_DEBUG_DRAW_MODE"}(s||e("c",s={})),e("b",{});var D=e("a",{});function B(){return l().then((function(){return t.import("./bullet.release.asm-b4a35818.js").then((function(t){var l;return null!=(l=t.default)?l().then((function(t){a("[bullet]:bullet asm lib loaded."),e("b",t)})):new Promise((function(e){e()}))}))})).catch((function(e){n(e)}))}D.BODY_CACHE_NAME="body",D.CCT_CACHE_NAME="cct",r.onPostInfrastructureInitDelegate.add(B)}}}));