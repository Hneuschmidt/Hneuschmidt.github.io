from pathlib import Path
import sys

TEMPLATE = """\
---
layout: post
author: Hannes
---

# TODO
"""


if __name__ == '__main__':
    post_dir = Path(".") / "_posts"
    new_post = post_dir / "1996-04-06-current.md"
    if new_post.exists():
        print((
                  f"The file {new_post} already exists, make sure to "
                  "change the name for publishing first before starting "
                  "a new 'current' post."
              ),
              file=sys.stderr)
        exit(0)

    with new_post.open("w") as fp:
        fp.write(TEMPLATE)
    print(f"New post created at {new_post}")
