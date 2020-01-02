<?php

echo $_SERVER["REQUEST_METHOD"]
."\n".(($_POST) ? "POST: ".json_encode($_POST):"")
."\n".(($_GET) ? "GET: ".json_encode($_GET) :"")
."\n"."HEADERS: ".json_encode(getallheaders());
