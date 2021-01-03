#!/bin/bash
# Este es nuestro primer progrma
echo "🚀 Construyendo..." \
&& yarn build \
&& echo "❌ Borrando antigua página web" \
&& ssh -l u69526089 home421635393.1and1-data.host "ls -la; rm -rfd *; ls -la" \
&& echo "📈 Subiendo nueva página" \
&& scp -r ./public/* u69526089@home421635393.1and1-data.host: \
&& echo "✅ Done"
