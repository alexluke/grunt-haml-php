<ul id="users">
  <?php foreach($users as $user) { ?>
    <li class="user">
      <?php echo $user->getName(); ?>
      Email: <?php echo $user->getEmail(); ?>
      <a href="<?php echo $user->getUrl(); ?>">Home page</a>
    </li>
  <?php } ?>
</ul>