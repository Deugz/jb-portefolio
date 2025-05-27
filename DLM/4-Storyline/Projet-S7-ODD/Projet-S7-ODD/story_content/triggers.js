function ExecuteScript(strId)
{
  switch (strId)
  {
      case "62tDXxhhvyx":
        Script1();
        break;
      case "5v51RmyuCIE":
        Script2();
        break;
      case "6pnvagTSeOM":
        Script3();
        break;
      case "64RTYHL7bMx":
        Script4();
        break;
      case "5tjLZ0N7d3T":
        Script5();
        break;
      case "5YS3RxOSE11":
        Script6();
        break;
      case "6BKOjAN3DsN":
        Script7();
        break;
      case "6PaiGZzHouq":
        Script8();
        break;
      case "67WL0elD9y2":
        Script9();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('6SWAbKHmWWI');
const duration = 750;
const easing = 'ease-out';
const id = '5y44FwXF9Ir';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('6SWAbKHmWWI');
const duration = 750;
const easing = 'ease-out';
const id = '6araIpCp0Ui';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('69MIJsUJCL9');
const duration = 750;
const easing = 'ease-out';
const id = '5y44FwXF9Ir';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('69MIJsUJCL9');
const duration = 750;
const easing = 'ease-out';
const id = '6araIpCp0Ui';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
